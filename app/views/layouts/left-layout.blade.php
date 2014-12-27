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
    <?php if(App::isLocal() && $_SERVER['HTTP_USER_AGENT'] == 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2258.2 Safari/537.36'): ?>
    <!--local font for development only-->
    <link href='/assets/fonts/ubuntu/local-font.css' rel='stylesheet' type='text/css'>
    <?php else: ?>
    <link href='http://fonts.googleapis.com/css?family=Ubuntu:400,500,700' rel='stylesheet' type='text/css'>
    <?php endif; ?>
</head>

<body>

<?php if (Config::get('toogether.show-demo-menu')): ?>
<ul class="demo-menu list-inline">
    <li>
        <a href="/layouts">Homepage</a>
    </li>
    <li>
        <a href="/layouts/preview?state=uploading">Uploading state</a>
    </li>
    <li>
        <a href="/layouts/preview?state=uploading-multiple">Uploading multiple</a>
    </li>
    {{--<li>--}}
        {{--<a href="/layouts/preview?state=placeholder">Uploading placeholder</a>--}}
    {{--</li>--}}
    <li>
        <a href="/layouts/preview">Upload preview</a>
    </li>
    {{--<li>--}}
        {{--<a href="/layouts/preview?state=updating">Updating asset</a>--}}
    {{--</li>--}}
</ul>
<?php endif; ?>

<div class="container-fluid" id="content-wrapper">
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
        </nav>
        <!-- /mp-menu -->

        <div class="menu-toggle">
            <a href="#" id="toggle-menu" class="fade">
                <i class="fa fa-bars fa-2x fa-rotate-90">
                </i>
            </a>
        </div>

        <div class="scroller"><!-- this is for emulating position fixed of the nav -->
            <div class="scroller-inner">


                <header class="toogether-header">
                    <div class="logo">
                        <h3><a href="/">Toogether</a></h3>
                    </div>
                    <?php if(isset($showBanner)): ?>
                    <h1 class="animated fadeInUp"><span>The easiest and fastest,</span><span>1-to-1 way to approve great work.</span><span>No sign-up required.</span></h1>
                    <?php endif; ?>
                    <div class="clearfix"></div>
                </header>

                @yield('content')

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

<?php foreach(Config::get('toogether.assets.js') as $js) : ?>
<script src="<?php echo $js; ?>"></script>
<?php endforeach; ?>


<script>
$(function(){
    <?php if(Input::get('state') == 'uploading'): ?>
    var preview = $('.upload-preview').addClass('working');
    preview.find('.progress-container').addClass('in');
    <?php elseif(Input::get('state') == 'uploading-multiple'): ?>
    var preview = $('.upload-preview').addClass('working uploading-multiple');
    var previewInner = preview.find('.upload-preview-inner');
    preview.find('.progress-container').addClass('in');

    for(var i=0;i<10;i++) {
        var clone = previewInner.children().first().clone();
        clone.appendTo(previewInner);
    }
    <?php endif; ?>
});
</script>


</body>
</html>
