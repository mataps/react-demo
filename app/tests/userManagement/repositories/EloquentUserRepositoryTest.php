<?php

use SourceScript\UserManagement\Repositories\EloquentUserRepository;

class EloquentUserRepositoryTest extends DbTestCase{

    function test_finding_single_entity_by_params_fails()
    {
        $repository = new EloquentUserRepository;

        $this->setExpectedExceptiSourceScriptctus\Common\Exceptions\DbException');

        $repository->findOneBy(['username'=>'foo']);
    }

    function test_creating_user_fails()
    {
        $repository = new EloquentUserRepository;
        $user = Mockery::mock('Eloquent', 'User');

        $user->shouldReceive('save')->once()->andReturn(false);

        $this->setExpectedExcSourceScriptGalactus\Common\Exceptions\DbException');

        $repository->create($user);
    }

    function test_creating_user_success()
    {
        $repository = new EloquentUserRepository;
        $user = Mockery::mock('Eloquent', 'User');

        $user->shouldReceive('save')->once()->andReturn(true);

        $result = $repository->create($user);

        $this->assertEquals($user, $result);
    }

    /**
     * @dataProvider validFindOneByInputProvider
     */
    function test_finding_single_entity_by_params_success($data, $query)
    {
        $user = User::create($data);

        $repository = new EloquentUserRepository;

        $result = $repository->findOneBy($query);

        $this->assertEquals($user->id, $result->id);
    }

    function validFindOneByInputProvider()
    {
        return array(
            array(
                array('username'=>'foo', 'password'=>'bar', 'group_id'=>1),
                array('username'=>'foo')
            ),
            array(
                array('username'=>'test', 'password'=>'123', 'group_id'=>1),
                array('username'=>'test', 'password'=> '123')
            ),
            array(
                array('username'=>'admin', 'password'=>'123', 'group_id'=>1),
                array('username'=>'admin', 'password'=> '123', 'group_id'=>1)
            ),
        );
    }
} 