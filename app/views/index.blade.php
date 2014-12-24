<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Application</title>
    <meta charset="utf-8">
    <!--IE Compatibility modes-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!--Mobile first-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    {{--TODO: Add production and devevelopment css--}}
    <link href='http://fonts.googleapis.com/css?family=Ubuntu:400,500,700' rel='stylesheet' type='text/css'>
</head>

<body>

<div class="container-fluid" id="content-wrapper">
    <!-- Push Wrapper -->
    <div class="mp-pusher" id="mp-pusher">
        <!-- mp-menu -->
        <nav id="mp-menu" class="mp-menu">
            <div class="mp-level">
                <h2 class="icon icon-world">Files</h2>
                <ul class="files">
                </ul>
                <ul class="menu-options">
                    <li><button href="#" class="btn btn-primary">LOG</button></li>
                    <li><button href="#" class="btn btn-primary">DELETE BATCH</button></li>
                </ul>
            </div>
        </nav>
        <!-- /mp-menu -->

        <div class="menu-toggle">
            <a href="#" id="toggle-menu">
                <i class="fa fa-bars fa-2x fa-rotate-90">
                </i>
            </a>
        </div>

        {{--<header class="codrops-header">--}}
        {{--<div class="logo">--}}
        {{--<h3><a href="/">Toogether</a></h3>--}}
        {{--</div>--}}
        {{--<h1><span>The easiest and fastest,</span><span>1-to-1 way to approve great work.</span><span>No sign-up required.</span></h1>--}}
        {{--</header>--}}


        <div class="scroller"><!-- this is for emulating position fixed of the nav -->
            <div class="scroller-inner">
                {{--<div class="upload-preview">--}}
                    {{--<div class="upload-preview-inner">--}}
                        {{--<div class="details">--}}
                            {{--<button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>--}}
                            {{--<span class="filename">1419194287_tumblr_static_nebula_873.jpg</span>--}}
                            {{--<img src="/uploads/795b204957bd09f8ee81c2fa1be07f56ab89eaf3/swimming.jpg" alt="Upload preview" class="img-responsive img-preview center-block"/>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}
                {{--<ul class="inner-right-menu list-unstyled">--}}
                    {{--<li>--}}
                        {{--<a href="#" class="btn">UPDATE</a>--}}
                    {{--</li>--}}
                    {{--<li>--}}
                        {{--<a href="#" id="send" class="btn">SEND</a>--}}
                    {{--</li>--}}
                {{--</ul>--}}



                {{--<!-- The file upload form used as target for the file upload widget -->--}}
                {{--<form id="fileupload" method="POST" enctype="multipart/form-data">--}}
                    {{--<!-- Redirect browsers with JavaScript disabled to the origin page -->--}}
                    {{--<noscript><input type="hidden" name="redirect" value="https://blueimp.github.io/jQuery-File-Upload/"></noscript>--}}
                    {{--<!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->--}}
                    {{--<!-- The fileinput-button span is used to style the file input field as button -->--}}
                    {{--<label class="btn btn-success fileinput-button" id="dropzone">--}}
                        {{--<i class="glyphicon glyphicon-plus"></i>--}}
                        {{--<p>You’re currently using FreeView.</p>--}}
                        {{--<p>You can add upto five assets today.</p>--}}
                        {{--<input type="file" name="files[]" class="hide" multiple>--}}
                    {{--</label>--}}
                    {{--<!-- The global file processing state -->--}}
                    {{--<span class="fileupload-process"></span>--}}
                {{--</form>--}}

                <div class="clearfix"></div>
                <footer>
                    <ul class="list-inline">
                        <li>
                            <a href="#">HOW TO</a>
                        </li>
                        <li>
                            <a href="#">UPGRADE</a>
                        </li>
                        <li>
                            <a href="#">TERMS OF USE</a>
                        </li>
                        <li>
                            <a href="#">TWITTER</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </footer>
            </div><!-- /scroller-inner -->
        </div><!-- /scroller -->

    </div><!-- /pusher -->
</div><!-- /container -->

{{--<div class="container-fluid">--}}
    {{--<div class="row">--}}
        {{--<div id="content" class="col-md-12">--}}
            {{--<div class="menu-toggle">--}}
                {{--<a href="#">--}}
                    {{--<i class="fa fa-bars fa-2x fa-rotate-90">--}}
                    {{--</i>--}}
                {{--</a>--}}
            {{--</div>--}}
            {{--<div class="main">--}}
                {{--<!-- The table listing the files available for upload/download -->--}}
                {{--<table role="presentation" class="table table-striped"><tbody class="files"></tbody></table>--}}

                {{--<!-- The file upload form used as target for the file upload widget -->--}}
                {{--<form id="fileupload" method="POST" enctype="multipart/form-data">--}}
                    {{--<!-- Redirect browsers with JavaScript disabled to the origin page -->--}}
                    {{--<noscript><input type="hidden" name="redirect" value="https://blueimp.github.io/jQuery-File-Upload/"></noscript>--}}
                    {{--<!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->--}}
                    {{--<div class="row fileupload-buttonbar">--}}
                        {{--<div class="col-lg-7">--}}
                            {{--<!-- The fileinput-button span is used to style the file input field as button -->--}}
                        {{--<span class="btn btn-success fileinput-button" id="dropzone">--}}
                            {{--<i class="glyphicon glyphicon-plus"></i>--}}
                            {{--<span>Drag and drop files...</span>--}}
                            {{--<input type="file" name="files[]" multiple>--}}
                        {{--</span>--}}
                            {{--<!-- The global file processing state -->--}}
                            {{--<span class="fileupload-process"></span>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</form>--}}
                {{--<div class="upload-preview-container fade"></div>--}}
                {{--<div class="upload-preview-container-overlay modal-backdrop fade"></div>--}}
            {{--</div>--}}
        {{--</div>--}}
        {{--<div id="menu"></div>--}}
    {{--</div>--}}
{{--</div>--}}

{{--<!-- Modal -->--}}
{{--<div class="modal fade" id="sendModal" tabindex="-1" role="dialog" aria-hidden="true">--}}
    {{--<div class="modal-dialog">--}}
        {{--<div class="modal-content">--}}
            {{--<div class="modal-body">--}}
                {{--<form action="/send" role="form" method="POST">--}}
                    {{--<div class="form-group">--}}
                        {{--<input type="text" class="form-control" name="marker-email" placeholder="Your email address">--}}
                    {{--</div>--}}
                    {{--<div class="form-group">--}}
                        {{--<input type="text" class="form-control" name="approver-email" placeholder="Approver's email address">--}}
                    {{--</div>--}}
                    {{--<div class="buttons text-right">--}}
                        {{--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--}}
                        {{--<button type="submit" class="btn btn-success">Send</button>--}}
                    {{--</div>--}}
                {{--</form>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
{{--</div>--}}

<!-- The template to display files available for upload -->
<script id="template-upload" type="text/x-tmpl">
{% for (var i=0, file; file=o.files[i]; i++) { %}
    <tr class="template-upload fade">
        <td>
            <span class="preview"></span>
        </td>
        <td>
            <p class="name">{%=file.name%}</p>
            <strong class="error text-danger"></strong>
        </td>
        <td>
            <p class="size">Processing...</p>
            <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-bar progress-bar-success" style="width:0%;"></div></div>
        </td>
        <td>
            {% if (!i) { %}
                <button class="btn btn-warning cancel">
                    <i class="glyphicon glyphicon-ban-circle"></i>
                    <span>Cancel</span>
                </button>
            {% } %}
        </td>
    </tr>
{% } %}
</script>
<!-- The template to display files available for download -->
<script id="template-download" type="text/x-tmpl">

</script>

<script src="/assets/vendor/jquery/dist/jquery.min.js"></script>
<script src="/assets/vendor/lodash/dist/lodash.min.js"></script>

<!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->
<script src="/assets/vendor/jquery-file-upload/js/vendor/jquery.ui.widget.js"></script>
<!-- The Templates plugin is included to render the upload/download listings -->
{{--<script src="//blueimp.github.io/JavaScript-Templates/js/tmpl.js"></script>--}}
<!-- Bootstrap JS is not required, but included for the responsive demo navigation -->
<script src="/assets/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- The basic File Upload plugin -->
<script src="/assets/vendor/jquery-file-upload/js/jquery.fileupload.js"></script>
<!-- The File Upload processing plugin -->
<script src="/assets/vendor/jquery-file-upload/js/jquery.fileupload-process.js"></script>
<!-- The File Upload validation plugin -->
<script src="/assets/vendor/jquery-file-upload/js/jquery.fileupload-validate.js"></script>
<!-- The File Upload user interface plugin -->
<script src="/assets/vendor/jquery-file-upload/js/jquery.fileupload-ui.js"></script>

<script src="/assets/vendor/diff-renderer/dist/diff-renderer.js"></script>

<script src="/assets/js/bootstrap-editable.min.js"></script>

{{--<script src="/assets/vendor/multilevelpushmenu/jquery.multilevelpushmenu.js"></script>--}}
<script src="/assets/js/classie.js"></script>
<script src="/assets/js/mlpushmenu.js"></script>

{{--<script src="/assets/js/jqfactory.js"></script>--}}

<script src="/assets/js/upload-preview.js"></script>
<script src="/assets/js/file-menu.js"></script>
<script src="/assets/js/drop-zone.js"></script>

<!-- The main application script -->
<script src="/assets/js/main.js"></script>

<script>
    new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'toggle-menu' ) );
</script>

</body>
</html>
