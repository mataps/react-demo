<?php

namespace Toogether\Commands\SendAsset\Handlers;


class MailAsset {

    function handle($originalInput, $result)
    {
        $result->visitor = \Visitor::getCurrent();

        $view = 'emails.approver-notification';

        $data = $originalInput;

        \Mail::send($view, $originalInput, function($message) use ($data) {
            $message->to($data['approver-email'])->subject('An asset has been sent to you.');
        });
    }
}