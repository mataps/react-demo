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
    <link href='http://fonts.googleapis.com/css?family=Ubuntu:400,500,700' rel='stylesheet' type='text/css'>
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
        {{--<li><a href="/layouts/preview?state=uploading">Uploading state</a></li>--}}
        {{--<li><a href="/layouts/preview?state=uploading-multiple">Uploading multiple</a></li>--}}
        {{--<li><a href="/layouts/preview?state=placeholder">Uploading placeholder</a></li>--}}
        {{--<li><a href="/layouts/preview">Upload preview</a></li>--}}
        {{--<li><a href="/layouts/preview?state=updating">Updating asset</a></li>--}}
        <li><a href="/layouts/comments">Commenting</a></li>
        <li><a href="/layouts/dialogs">Dialogs</a></li>
    </ul>
</div>
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
            <ul class="menu-options">
                <li><button href="#" onClick={this.renameActiveItem} class="btn btn-info">RENAME</button></li>
                <li><button href="#" class="btn btn-primary">LOG</button></li>
                <li><button href="#" class="btn btn-danger">DELETE BATCH</button></li>
            </ul>
        </nav>
        <!-- /mp-menu -->

        <div class="menu-toggle">
            <a href="#" id="toggle-menu" class="fade">
                <i class="fa fa-bars fa-2x fa-rotate-90">
                </i>
            </a>
        </div>

        <div class="row scroller"><!-- this is for emulating position fixed of the nav -->
            <div class="col-xs-12 scroller-inner">
                <header class="toogether-header">
                    <div class="logo">
                        <h3><a href="/">Toogether</a></h3>
                    </div>
                </header>

                <div id="main-wrapper">
                    <div id="main-content" class="container">

                    @yield('content')

                        <!-- /footer -->

                    </div><!-- /main-content -->
                    <footer class="col-xs-12">
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
                        <ul class="stats list-inline visible-md-block">
                            <li>
                                <a href="#">12,345 Makers</a>
                            </li>
                            <li>
                                <a href="#">100,345 JPEGs</a>
                            </li>
                            <li>
                                <a href="#">33,456 Cards</a>
                            </li>
                        </ul>
                    </footer>
                </div><!-- /main-wrapper -->

            </div><!-- /scroller-inner -->
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
