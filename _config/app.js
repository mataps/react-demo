paths = require('./paths');

var app = {};

app.css = [
  paths.vendor + 'font-awesome/css/font-awesome.css',
  paths.css + 'bootstrap.custom.css',
  paths.css + 'demo.css',
  paths.css + 'component.css',
  paths.css + 'bootstrap-editable.css',
  paths.css + 'menu.css',
  paths.css + 'style.css'
];

app.js = [
  paths.vendor + 'jquery/dist/jquery.js',
  paths.vendor + 'jquery-file-upload/js/vendor/jquery.ui.widget.js', /** The jQuery UI widget factory, can be omitted if jQuery UI is already included */
  paths.vendor + 'lodash/dist/lodash.underscore.js',
  paths.vendor + 'backbone/backbone.js',
  paths.vendor + 'bootstrap/dist/js/bootstrap.js',
  paths.vendor + 'jquery-file-upload/js/jquery.fileupload.js', /**  The basic File Upload plugin */
  paths.vendor + 'jquery-file-upload/js/jquery.fileupload-process.js', /**  The File Upload processing plugin */
  paths.vendor + 'jquery-file-upload/js/jquery.fileupload-validate.js', /**  The File Upload validation plugin */
  paths.vendor + 'jquery-file-upload/js/jquery.fileupload-ui.js', /**  The File Upload user interface plugin */
  paths.vendor + 'diff-renderer/dist/diff-renderer.js',
  paths.js + '/libs/drop-zone.js',
  //paths.js + '/libs/bootstrap-editable.min.js',
  paths.js + '/libs/classie.js',
  paths.js + '/libs/mlpushmenu.js',
  //paths.js + '/components/upload-preview.js',
  paths.js + '/main.js',
  paths.js + '/components/file-menu.js'
];


module.exports = app;