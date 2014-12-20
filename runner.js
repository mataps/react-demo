/*
 * QtWebKit-powered headless test runner using PhantomJS
 *
 * modified from https://github.com/jquery/qunit/tree/master/addons/phantomjs
 *
 * PhantomJS binaries: http://phantomjs.org/download.html
 * Requires PhantomJS 1.6+ (1.7+ recommended)
 *
 * Run with:
 * phantomjs runner.js [url-of-your-qunit-testsuite]
 *
 * e.g.
 * phantomjs runner.js http://localhost/qunit/test/index.html
 */

/*global phantom:false, require:false, console:false, window:false, QUnit:false */

(function () {
  'use strict';

  var url, testScript, page, timeout, loadInProgress = false,
    args = require('system').args;

  // arg[0]: scriptName, args[1...]: arguments
  if (args.length < 3 || args.length > 4) {
    console.error('Usage:\n phantomjs runner.js [url-of-page-to-test] [path-to-test-script] [timeout-in-seconds]');
    phantom.exit(1);
  }

  if (args[3] !== undefined) {
    timeout = parseInt(args[3], 10);
  }

  testScript = args[2];
  url = args[1];
  page = require('webpage').create();

  page.open(url, function (status) {
    if (status !== 'success') {
      console.error('Unable to access network: ' + status);
      phantom.exit(1);
    } else {
      // Cannot do this verification with the 'DOMContentLoaded' handler because it
      // will be too late to attach it if a page does not have any script tags.
      var qunitMissing = page.evaluate(function () {
        return (typeof QUnit === 'undefined' || !QUnit);
      });
      if (qunitMissing) {
        console.error('The `QUnit` object is not present on this page.');
        phantom.exit(1);
      }
      // Set a timeout on the test running, otherwise tests with async problems will hang forever
      if (typeof timeout === 'number') {
        setTimeout(function () {
          console.error('The specified timeout of ' + timeout + ' seconds has expired. Aborting...');
          phantom.exit(1);
        }, timeout * 1000);
      }
      // Do nothing... the callback mechanism will handle everything else!
    }
  });

  page.onLoadStarted = function() {
    loadInProgress = true;
  };

  // This callback is invoked after the web page object is created but before a URL is loaded. The callback may be used to change global objects.
  page.onInitialized = function () {
    //add QUnit to Page
    console.log( page.injectJs("public/assets/vendor/qunit/qunit/qunit.js") ? '' : "injecting QUnit fail! Check the $PWD?!" );
    //add Tests to Page
    console.log( page.injectJs(testScript) ? '' : ("Injecting Tests failed! Check the "+testScript+"?!") );
  };

  page.onLoadFinished = function() {
    loadInProgress = false;
    // now we have a loaded DOM we can inject our tests
    page.evaluate(addPageScopeFunctionsToPage);
    page.evaluate(addExecutePageScopeFunctionsToPage);
    page.evaluate(setEventListener_extractQunitResults);
  };

  // This callback is invoked when there is a JavaScript window.callPhantom call made on the web page. The only argument passed to the callback is a data object.
  page.onCallback = function (message) {
    var result,
      failed;

    if (message) {
      if (message.name === 'QUnit.done') {
        result = message.data;
        failed = !result || result.failed;

        phantom.exit(failed ? 1 : 0);
      }
    }
  };

  // Route `console.log()` calls from within the Page context to the main Phantom context (i.e. current `this`)
  page.onConsoleMessage = function (msg) {
    console.log(msg);
  };

  function setEventListener_extractQunitResults() {
    window.document.addEventListener('DOMContentLoaded', executePageScopeFunctions(), false);
  }

  function addExecutePageScopeFunctionsToPage(){
    window.executePageScopeFunctions = function(){
      window.addQunitExtractor();
      //console.log('Executing: executePageScopeFunctions, document.readyState: '+document.readyState);
      window.runTests();
    };
  }

  function addPageScopeFunctionsToPage(){
    window.dumpPageContents = function () {
      console.log(document.querySelectorAll('html')[0].outerHTML);
    };

    window.addQunitExtractor = function() {
      console.log('Extracting results');
      var currentTestAssertions = [];
      QUnit.log(function (details) {
        var response;
        // Ignore passing assertions
        if (details.result) {
          return;
        }
        response = details.message || '';
        if (typeof details.expected !== 'undefined') {
          if (response) {
            response += ', ';
          }
          response += 'expected: ' + details.expected + ', but was: ' + details.actual;
        }
        if (details.source) {
          response += "\n" + details.source;
        }
        currentTestAssertions.push('Failed assertion: ' + response);
      });
      QUnit.testDone(function (result) {
        var i,
          len,
          name = result.module + ': ' + result.name;
        if (result.failed) {
          console.error("Test failed:"+name);
          for (i = 0, len = currentTestAssertions.length; i < len; i++) {
            console.log(' ' + currentTestAssertions[i]);
          }
        }
        currentTestAssertions.length = 0;
      });
      QUnit.done(function (result) {
        console.log('Took ' + result.runtime + 'ms to run ' + result.total + ' tests. ' + result.passed + ' passed, ' + result.failed + ' failed.');
        if (typeof window.callPhantom === 'function') {
          window.callPhantom({
            'name': 'QUnit.done',
            'data': result
          });
        }
      });
    };
  }
})();