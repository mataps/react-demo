@extends('layouts.left-layout')

@section('script')
    <script>
        window.testEnv = true;
        $(function(){
            <?php if(Input::get('state') == 'uploading'): ?>
            var preview = $('.upload-preview').addClass('working');
            preview.find('.progress-container').addClass('in');
            <?php elseif(Input::get('state') == 'uploading-multiple'): ?>
            var preview = $('.upload-preview').addClass('working multiple');
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