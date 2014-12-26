<?php

namespace Toogether\Commands\UploadFiles\Handlers;


class SetVisitor {

    function handle($originalInput, $result)
    {
        $result->visitor = \Visitor::getCurrent();
    }

}