paths = require('./paths');

var app = {};

app.css = [
  paths.vendor + 'font-awesome/css/font-awesome.css',
  paths.vendor + 'ionicons/css/ionicons.css',
  paths.vendor + 'animate.css/animate.css',
  paths.css + 'libs/bootstrap-editable.css',
  //paths.js + '/libs/wysiwyg-external/google-code-prettify/prettify.css',
  //paths.css + 'bootstrap.custom.css',
  //paths.css + 'demo.css',
  //paths.css + 'component.css',
  //paths.css + 'menu.css',
  //paths.css + 'style.css'
  paths.css + 'main.less'
];

app.lessMain = paths.css + 'main.less';

app.js = [
  paths.vendor + 'jquery/dist/jquery.js',
  //paths.vendor + 'jquery-file-upload/js/vendor/jquery.ui.widget.js', /** The jQuery UI widget factory, can be omitted if jQuery UI is already included */
  paths.vendor + 'lodash/dist/lodash.js',
  //paths.vendor + 'backbone/backbone.js',
  paths.vendor + 'bootstrap/dist/js/bootstrap.js',
  paths.vendor + 'jquery-ui/ui/core.js',
  paths.vendor + 'jquery-ui/ui/widget.js',
  paths.vendor + 'jquery-ui/ui/mouse.js',
  paths.vendor + 'jquery-ui/ui/position.js',
  paths.vendor + 'jquery-ui/ui/draggable.js',
  paths.vendor + 'jquery-ui/ui/droppable.js',
  paths.vendor + 'jquery-ui/ui/resizable.js',
  paths.vendor + 'jquery-file-upload/js/jquery.fileupload.js', /**  The basic File Upload plugin */
  paths.vendor + 'jquery-file-upload/js/jquery.fileupload-process.js', /**  The File Upload processing plugin */
  paths.vendor + 'jquery-file-upload/js/jquery.fileupload-validate.js', /**  The File Upload validation plugin */
  //paths.vendor + 'jquery-file-upload/js/jquery.fileupload-ui.js', /**  The File Upload user interface plugin */
  paths.vendor + 'blueimp-load-image/js/load-image.all.min.js',
  paths.vendor + 'blueimp-canvas-to-blob/js/canvas-to-blob.js',
  paths.vendor + 'jquery-file-upload/js/jquery.fileupload-image.js',
  //paths.vendor + 'diff-renderer/dist/diff-renderer.js',
  paths.js + '/libs/drop-zone.js',
  paths.js + '/libs/jquery.doubletap.js',
  paths.js + '/libs/wysiwyg-external/jquery.hotkeys.js',
  //paths.js + '/libs/wysiwyg-external/google-code-prettify/prettify.js',
  paths.js + '/libs/bootstrap-wysiwyg.js',
  paths.js + '/libs/bootstrap-editable.js',
  paths.js + '/libs/classie.js',
  paths.js + '/libs/mlpushmenu.js',
  //paths.js + '/components/upload-preview.js',
  //paths.js + '/main.js',
  //paths.js + '/components/file-menu.js',
  //paths.js + '/components/file-upload.js',
  //paths.js + '/components/stickycomment.js',
  //paths.js + '/pages/home.js',
  //paths.js + '/pages/marker.js'
];

app.tmpl = paths.js + '_templates/**/*.html'


module.exports = app;