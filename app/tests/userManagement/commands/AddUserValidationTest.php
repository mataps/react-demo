<?php

use SourceScript\Common\Exceptions\ValidationException;
SourceScriptctus\UserManagement\Commands\AddUser;

class AddUserValidationTest extends DbTestCase{

    /**
     * @dataProvider inputProvider
     */
    function test_creating_user_with_invalid_group_id($input, $error)
    {
        $repository = MockerySourceScriptGalactus\UserManagement\Repositories\UserRepositoryInterface');
        $command = new AddUser($repository);

        try {
            $command->validate($this->app['validator'], $input);
        }
        catch(ValidationException $exception)
        {
            $this->assertEquals($error, $exception->toArray());
            return;
        }

        $this->fail('Validation exception was not thrown');
    }

    public function inputProvider()
    {
        return array(
            array(
                'input' => array(
                    'username' => 'foo',
                    'password' => 'bar',
                    'group_id' => '1234'
                ),
                'errors' => array(
                    'group_id' => array('Invalid group')
                )
            ),
            array(
                'input' => array(
                    'username' => NULL,
                    'password' => NULL,
                    'group_id' => ''
                ),
                'errors' => array(
                    'username' => array('The username field is required.'),
                    'password' => array('The password field is required.'),
                    'group_id' => array('The group id field is required.')
                )
            )
        );
    }
} 