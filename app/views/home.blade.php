@extends('layouts.left-layout')

@section('content')

    <!-- The file upload form used as target for the file upload widget -->
    <form id="fileupload" method="POST" enctype="multipart/form-data">
        <!-- Redirect browsers with JavaScript disabled to the origin page -->
        <noscript><input type="hidden" name="redirect" value="https://blueimp.github.io/jQuery-File-Upload/"></noscript>
        <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->
        <!-- The fileinput-button span is used to style the file input field as button -->
        <label class="btn btn-success fileinput-button" id="dropzone">
            <i class="glyphicon glyphicon-plus"></i>
            <p>You’re currently using FreeView.</p>
            <p>You can add upto five assets today.</p>
            <input type="file" name="files[]" class="hide" multiple>
        </label>
        <!-- The global file processing state -->
        <span class="fileupload-process"></span>
    </form>

@stop