<?php

return array(
    'V1' => array(
        'rules' => array(
            'marker-email' => 'required|email',
            'approver-email' => 'required|email',
            'link' => 'required'
        ),
        'messages' => array(
            'email' => 'Invalid email'
        )
    )
);