@extends('layouts.left-layout')

@section('pre-script')
    <script>
        window.testEnv = true;
    </script>
@stop

@section('script')
    <script>
        var React = require('react');
        var Marker = require('./__app/components/Homepage.js')();
        React.render(Marker, document.getElementById('main-content'));
    </script>
@stop