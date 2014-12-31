@extends('layouts.left-layout')

@section('content')

    <div class="upload-preview col-xs-12">
        <div class="upload-preview-inner">
            <div class="asset">
                <button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                <span class="filename">tumblr_static_nebula_873.jpg</span>

                <div class="progress-container fade">
                    <div class="progress">
                        <div class="progress-bar" style="width: 60%;"></div>
                    </div>
                </div>

                <img src="/tests/upload.jpg" alt="Upload preview" class="img-responsive img-preview"/>
            </div>
        </div>
    </div>

    <ul class="col-xs-12 inner-right-menu list-unstyled fade">
        <li>
            <a href="#" class="btn btn-default btn-block">UPDATE</a>
        </li>
        <li>
            <a href="#" id="send" class="btn btn-default btn-block">SEND</a>
        </li>
    </ul>
@stop

@section('script')
    <script>
        $(function(){
            <?php if(Input::get('state') == 'uploading'): ?>
            var preview = $('.upload-preview').addClass('working');
            preview.find('.progress-container').addClass('in');
            <?php elseif(Input::get('state') == 'uploading-multiple'): ?>
            var preview = $('.upload-preview').addClass('working uploading-multiple');
            var previewInner = preview.find('.upload-preview-inner');
            preview.find('.progress-container').addClass('in');
            for(var i=0;i<5;i++) {
                var clone = previewInner.children().first().clone();
                clone.appendTo(previewInner);
            }
            <?php else: ?>
            $('.inner-right-menu').addClass('in');
            var fileMenu = new Toogether.Views.FileMenuView({
              el: $('#mp-menu'),
              trigger: $('#toggle-menu')
            });
            <?php endif; ?>
        });
    </script>
@stop