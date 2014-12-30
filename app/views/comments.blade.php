@extends('layouts.left-layout')

@section('content')
    <div class="notes" data-role="editor-toolbar" data-target=".comments">
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
        <div class="tools">
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
        <div class="footer">
            {{--<a href="#" class="file-uploads word">W</a>--}}
            {{--<a href="#" class="file-uploads pdf">PDF</a>--}}
            {{--<a href="#" class="file-uploads jpg">JPG</a>--}}
            {{--<a href="#" class="file-uploads png">PNG</a>--}}
            <a href="#" class="upload-btn">PLUS</a>
        </div>
    </div>

    <div class="notes" data-role="editor-toolbar" data-target=".comments">
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
        <div class="tools">
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
        <div class="footer">
            {{--<a href="#" class="file-uploads word">W</a>--}}
            {{--<a href="#" class="file-uploads pdf">PDF</a>--}}
            {{--<a href="#" class="file-uploads jpg">JPG</a>--}}
            {{--<a href="#" class="file-uploads png">PNG</a>--}}
            <a href="#" class="upload-btn">PLUS</a>
        </div>
    </div>
@stop