<?php

use SourceScript\Common\Exceptions\DbException;
use SourceScript\UserManagement\Queries\GetUserByCredentials;

class GetUserByCredentialsTest extends TestCase{

    function setUp()
    {
        parent::setUp();
        $this->repository = Mockery::mock('SourceScript\UserManagement\Repositories\UserRepositoryInterface');
        $this->hasher = Mockery::mock('Illuminate\Hashing\HasherInterface');
        $this->query = new GetUserByCredentials($this->repository, $this->hasher);
    }

    function test_invalid_username()
    {
        $inputs = [
            'username' => 'foo',
            'password' => 'bar'
        ];

        $this->repository->shouldReceive('findOneBy')->andThrow(new DbException);
        $this->setExpectedException('SourceScript\UserManagement\Exceptions\InvalidCredentialsException');

        $this->query->handle($inputs);
    }

    function test_invalid_password()
    {
        $inputs = [
            'username' => 'foo',
            'password' => 'bar'
        ];

        $user = new User;
        $this->repository->shouldReceive('findOneBy')->andReturn($user);
        $this->hasher->shouldReceive('check')->andReturn(false);

        $this->setExpectedException('SourceScript\UserManagement\Exceptions\InvalidCredentialsException');

        $this->query->handle($inputs);
    }

    function test_valid_credentials()
    {
        $inputs = [
            'username' => 'foo',
            'password' => 'bar'
        ];

        $user = new User;
        $user->name = 'foo';
        $user->password = 'bar';

        $this->repository->shouldReceive('findOneBy')->andReturn($user);
        $this->hasher->shouldReceive('check')->andReturn(true);

        $result = $this->query->handle($inputs);

        $this->assertEquals($user, $result);
    }
} 