@extends('layouts.left-layout')

@section('content')

    <div class="upload-preview col-xs-12">
        <div class="upload-preview-inner">
            <div class="asset">
                <button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                <span class="filename">tumblr_static_nebula_873.jpg</span>

                <img src="/tests/upload.jpg" alt="Upload preview" class="img-responsive img-preview"/>
            </div>
        </div>
    </div>

    <ul class="col-xs-12 inner-right-menu list-unstyled">
        <li>
            <a href="#" id="new-card" class="btn btn-default btn-block"><i class="fa fa-plus"></i> CARD</a>
        </li>
        <li>
            <a href="#" id="done" class="btn btn-default btn-block">DONE</a>
        </li>
        <li>
            <a href="#" id="log" class="btn btn-default btn-block">LOG</a>
        </li>
        <li>
            <a href="#" id="approve" class="btn btn-default btn-block">APPROVE</a>
        </li>
    </ul>
@stop

@section('script')
    <script id="notes-tmpl" type="text/template">
        <div class="notes fade">
            <div class="resize-control">
                <a href="#" id="ngrip" class="ion-drag ui-resizable-handle ui-resizable-n"></a>
            </div>
            <div class="header">
                <div class="card-details">
                    <span class="creation-date">11.12.13</span>
                    <span class="commentor-email">approvers@gmail.com</span>
                </div>
                <div class="btn-group pull-right">
                    <a class="btn btn-default delete-btn"><i class="fa fa-trash fa-2x"></i></a>
                </div>
            </div>
            <div class="tools" data-role="editor-toolbar">
                <div class="btn-group">
                    <a class="btn btn-default" data-edit="bold" title="Bold (Ctrl/Cmd+B)">
                        <i class="fa fa-bold"></i>
                    </a>
                    <a class="btn btn-default" data-edit="italic" title="Italic (Ctrl/Cmd+I)">
                        <i class="fa fa-italic"></i>
                    </a>
                    <a class="btn btn-default" data-edit="underline" title="Underline (Ctrl/Cmd+U)">
                        <i class="fa fa-underline"></i>
                    </a>
                    <a class="btn btn-default" data-edit="insertunorderedlist" title="Bullet list">
                        <i class="fa fa-list-ul"></i>
                    </a>
                </div>
                <div class="btn-group pull-right">
                    <a class="btn btn-default clear-btn">CLEAR CARD</a>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="contents">
                <div class="comments">
                    Approver’s comments
                    are here. Approver’s login
                    simply by clicking the link
                    they received.
                    These comment cards serve
                    as the main focal point for
                    Approvers. They can add
                    comments, attach a file, and
                    add and remove more com
                </div>
            </div>
            <div class="footer text-right" data-role="editor-toolbar">
                {{--<a href="#" class="file-uploads word">W</a>--}}
                {{--<a href="#" class="file-uploads pdf">PDF</a>--}}
                {{--<a href="#" class="file-uploads jpg">JPG</a>--}}
                {{--<a href="#" class="file-uploads png">PNG</a>--}}
                {{--<a href="#" class="upload-btn">PLUS</a>--}}
                <div class="btn-group">
                    <a class="btn" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="fa fa-image"></i></a>
                    <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">
                </div>
            </div>
        </div>
    </script>

    <script>
        $(function() {
            var fileMenu = new Toogether.Views.FileMenuView({
              el: $('#mp-menu'),
              trigger: $('#toggle-menu')
            });

            var stickyComment = new Toogether.Views.StickyComments({
                el: $('#main-content')
            });

            $('#new-card').on('click', function() {
                stickyComment.newCard();
            });
        })
    </script>
@stop