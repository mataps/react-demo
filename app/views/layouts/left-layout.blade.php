<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Application</title>
    <meta charset="utf-8">
    <!--IE Compatibility modes-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!--Mobile first-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <?php foreach(Config::get('toogether.assets.css') as $css) : ?>
    <link href='<?php echo $css; ?>' rel='stylesheet' type='text/css'>
    <?php endforeach; ?>
    <?php if(App::isLocal()): ?>
    <!--local font for development only-->
    <link href='/assets/fonts/ubuntu/local-font.css' rel='stylesheet' type='text/css'>
    <?php else: ?>
    <link href='http://fonts.googleapis.com/css?family=Roboto:500,300,400' rel='stylesheet' type='text/css'>
    <?php endif; ?>
</head>

<body>

<?php if (Config::get('toogether.show-demo-menu')): ?>
<div class="dropdown demo-menu">
    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
        Demo
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu1">
        <li><a href="/layouts">Homepage</a></li>
        <li><a href="/layouts/upload">Upload form</a></li>
        <li><a href="/layouts/preview?state=uploading">Uploading state</a></li>
        {{--<li><a href="/layouts/preview?state=uploading-multiple">Uploading multiple</a></li>--}}
        {{--<li><a href="/layouts/preview?state=placeholder">Uploading placeholder</a></li>--}}
        {{--<li><a href="/layouts/preview">Upload preview</a></li>--}}
        {{--<li><a href="/layouts/preview?state=updating">Updating asset</a></li>--}}
        <li><a href="/layouts/comments">Commenting</a></li>
        <li><a href="/layouts/dialogs">Dialogs</a></li>
    </ul>
</div>
<?php endif; ?>

<div id="content-wrapper">
    <!-- Push Wrapper -->
    <div class="mp-pusher" id="mp-pusher">
        <!-- mp-menu -->
        <nav id="mp-menu" class="mp-menu">
            <div class="mp-level">
                <h2 class="icon icon-world">Files</h2>
                <ul class="files">
                    <li><a href="#">File1.jpg</a></li>
                    <li><a href="#">File2.jpg</a></li>
                    <li><a href="#">File3.jpg</a></li>
                    <li><a href="#">File4.jpg</a></li>
                    <li><a href="#">File5.jpg</a></li>
                </ul>
                <ul class="menu-options">
                    <li><button href="#" class="btn btn-primary">LOG</button></li>
                    <li><button href="#" class="btn btn-danger">DELETE BATCH</button></li>
                </ul>
            </div>
            <ul class="menu-options">
                <li><button href="#" onClick={this.renameActiveItem} class="btn btn-info">RENAME</button></li>
                <li><button href="#" class="btn btn-primary">LOG</button></li>
                <li><button href="#" class="btn btn-danger">DELETE BATCH</button></li>
            </ul>
        </nav>
        <!-- /mp-menu -->

        <div class="scroller" id="main-content">
            @yield('content')
        </div><!-- /scroller -->

    </div><!-- /pusher -->
</div><!-- /container -->

@yield('pre-script')


<?php foreach(Config::get('toogether.assets.js') as $js) : ?>
<script src="<?php echo $js; ?>"></script>
<?php endforeach; ?>

@yield('script')

</body>
</html>
