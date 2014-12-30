@extends('layouts.left-layout')

@section('content')

    <?php if(isset($showBanner)): ?>
    <h1 class="animated fadeInUp">The easiest and fastest,<br/>1-to-1 way to approve great work.<br/>No sign-up required.</h1>
    <div class="text-center">
        <button class="btn btn-inverse marker-btn">MARKER</button>
        <button class="btn btn-inverse approver-btn">APPROVER</button>
    </div>
    <div class="clearfix"></div>
    <?php endif; ?>

@stop