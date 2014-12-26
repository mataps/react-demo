@extends('layouts.left-layout')

@section('content')

    <div class="upload-preview">
        <div class="upload-preview-inner">
            <div class="details">
                <button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                <span class="filename">tumblr_static_nebula_873.jpg</span>
                <img src="/tests/upload.jpg" alt="Upload preview" class="img-responsive img-preview"/>
            </div>
        </div>
    </div>

    <ul class="inner-right-menu list-unstyled">
        <li>
            <a href="#" class="btn btn-default">UPDATE</a>
        </li>
        <li>
            <a href="#" id="send" class="btn btn-default">SEND</a>
        </li>
    </ul>

@stop