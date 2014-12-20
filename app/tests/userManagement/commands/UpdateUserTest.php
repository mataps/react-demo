<?php


use SourceScript\UserManagement\Commands\UpdateUser;

class UpdateUserTest extends TestCase{

    function test_updating_user()
    {
        /** @vSourceScriptctus\UserManagement\Repositories\UserRepositoryInterface $repository */
        $repository = MockerySourceScriptGalactus\UserManagement\Repositories\UserRepositoryInterface');
        /** @var \Illuminate\Hashing\HasherInterface $hasher */
        $hasher = Mockery::mock('Illuminate\Hashing\HasherInterface');
        $command = new UpdateUser($repository, $hasher);

        $inputs = array(
            'username' => 'foo',
            'password' => 'bar',
            'group_id' => '1'
        );

        $user = new User;
        $user->username = $inputs['username'];
        $user->group_id = $inputs['group_id'];
        $user->password = 'FooBar';

        $hasher->shouldReceive('make')->once();
        $repository->shouldReceive('update')->once()->andReturn($user);

        $result = $command->handle($inputs, $user);

        $this->assertEquals($user, $result);
    }
} 