<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Application</title>
    <meta charset="utf-8">
    <!--IE Compatibility modes-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--Mobile first-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <link rel="stylesheet" href="/assets/vendor/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/vendor/multilevelpushmenu/jquery.multilevelpushmenu.css">
    <link rel="stylesheet" href="/assets/css/style.css">
</head>

<body>

<div id="qunit"></div>
<div id="qunit-fixture"></div>

<div class="container-fluid">
    <div class="row">
        <div id="content">
            <?php foreach($files as $file): ?>
                <div class="asset-preview-container">
                    <img src="<?php echo URL::to('/'.$folderPath .'/'. $file) ?>" alt=""/>
                </div>
            <?php endforeach; ?>
        </div>
        <ul class="preview-menu list-unstyled">
            <li>
                <a href="#">CARD</a>
            </li>
            <li>
                <a href="#">DONE</a>
            </li>
            <li>
                <a href="#">LOG</a>
            </li>
            <li>
                <a href="#">APPROVE</a>
            </li>
        </ul>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="sendModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <form action="/send" role="form" method="POST">
                    <div class="form-group">
                        <input type="text" class="form-control" name="marker-email" placeholder="Your email address">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="approver-email" placeholder="Approver's email address">
                    </div>
                    <div class="buttons text-right">
                        <button type="submit" class="btn btn-success">Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="/assets/vendor/jquery/dist/jquery.min.js"></script>
<script src="/assets/vendor/lodash/dist/lodash.min.js"></script>

<script src="/assets/vendor/multilevelpushmenu/jquery.multilevelpushmenu.js"></script>

<!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->
<script src="/assets/vendor/jquery-file-upload/js/vendor/jquery.ui.widget.js"></script>
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

<script src="/assets/js/upload-preview.js"></script>
<script src="/assets/js/drop-zone.js"></script>

<!-- The main application script -->
<script src="/assets/js/main.js"></script>

</body>
</html>
