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
                    <li><a href="#">File1.jpg</a></li>
                    <li><a href="#">File2.jpg</a></li>
                    <li><a href="#">File3.jpg</a></li>
                    <li><a href="#">File4.jpg</a></li>
                    <li><a href="#">File5.jpg</a></li>
                </ul>
                <ul class="menu-options">
                    <li><button href="#" class="btn btn-primary">LOG</button></li>
                    <li><button href="#" class="btn btn-primary">DELETE BATCH</button></li>
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


                <header class="codrops-header">
                    <div class="logo">
                        <h3><a href="/">Toogether</a></h3>
                    </div>
                    <?php if(isset($showBanner)): ?>
                    <h1><span>The easiest and fastest,</span><span>1-to-1 way to approve great work.</span><span>No sign-up required.</span></h1>
                    <?php endif; ?>
                </header>


                <?php if (Config::get('toogether.show-demo-menu')): ?>
                    <ul class="demo-menu list-inline">
                        <li>
                            <a href="/layouts">Homepage</a>
                        </li>
                        <li>
                            <a href="/layouts/preview">Upload preview</a>
                        </li>
                    </ul>
                <?php endif; ?>

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

</body>
</html>
