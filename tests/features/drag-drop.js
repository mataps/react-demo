runTests = function() {

  window.testUIWidget = $.blueimp.fileupload;
  window.testBasicWidget = $.blueimp.fileupload;
  var qunit = window.QUnit;

  var lifecycle = {
      setup: function () {
        // Set the .fileupload method to the basic widget method:
        $.widget('blueimp.fileupload', window.testBasicWidget, {});
      },
      teardown: function () {
        // Remove all remaining event listeners:
        $(document).unbind();
      }
    },
    lifecycleUI = {
      setup: function () {
        // Set the .fileupload method to the UI widget method:
        $.widget('blueimp.fileupload', window.testUIWidget, {});
      },
      teardown: function () {
        // Remove all remaining event listeners:
        $(document).unbind();
      }
    };

  qunit.module('Initialization', lifecycle);

  qunit.test('FileUpload initialization', function () {
    var fu = $('#fileupload');
    ok(fu.data('blueimp-fileupload') || fu.data('fileupload'));
  });

  qunit.test('add file', function() {

  })
}