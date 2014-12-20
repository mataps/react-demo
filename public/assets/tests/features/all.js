
  //'use strict';
  //window.testUIWidget = $.blueimp.fileupload;
  //window.testBasicWidget = $.blueimp.fileupload;
  //
  //var qunitHeader = $('<h1 id="qunit-header">').html(document.title + ' Test');
  //var qunitBanner = $('<h2 id="qunit-banner">');
  //var qunitTestrunner = $('<div id="qunit-testrunner-toolbar">');
  //var qunitUserAgent = $('<h2 id="qunit-userAgent">');
  //var qunitTests = $('<ol id="qunit-tests">');
  //var qunitFixture = $('<div id="qunit-fixture">');
  //
  //var body = $('body');
  //body.wrapInner(qunitFixture)
  //  .prepend(qunitHeader)
  //  .prepend(qunitBanner)
  //  .prepend(qunitTestrunner)
  //  .prepend(qunitUserAgent)
  //  .prepend(qunitTests);
  //
  //
  //var lifecycle = {
  //    setup: function () {
  //      // Set the .fileupload method to the basic widget method:
  //      $.widget('blueimp.fileupload', window.testBasicWidget, {});
  //    },
  //    teardown: function () {
  //      // Remove all remaining event listeners:
  //      $(document).unbind();
  //    }
  //  },
  //  lifecycleUI = {
  //    setup: function () {
  //      // Set the .fileupload method to the UI widget method:
  //      $.widget('blueimp.fileupload', window.testUIWidget, {});
  //    },
  //    teardown: function () {
  //      // Remove all remaining event listeners:
  //      $(document).unbind();
  //    }
  //  };
  //
  //module('Initialization', lifecycle);
  runTests = function() {
    QUnit.test( "static properties", function( assert ) {
      assert.ok(false);
    });
  }