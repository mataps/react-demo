@extends('layouts.left-layout')

@section('content')
    <div class="triggers">
        <button id="delete-btn">Delete asset</button>
    </div>
    <div id="modalContainer"></div>
@stop

@section('pre-script')
    <script>
        window.testEnv = true;
    </script>
@stop

@section('script')
    <script>
        var handlers = {
            handleYes: function() {
                mounted.hide();
            },
            handleNo: function() {
                mounted.hide();
            }
        };

        var React = require('react');
        var DeleteAssetModal = require('./__app/components/DeleteAssetModal.js')({
            show: false,
            content: 'Are you sure you want to continue?',
            buttons: [
                {type: 'primary', text: 'YES', handler: handlers.handleYes},
                {type: 'danger',  text: 'NO',  handler: handlers.handleNo}
            ]
        });
        var mounted = React.render(DeleteAssetModal, document.getElementById('modalContainer'));
        $('#delete-btn').on('click', function(e) {
            e.preventDefault();
            mounted.show();
        });
    </script>
@stop