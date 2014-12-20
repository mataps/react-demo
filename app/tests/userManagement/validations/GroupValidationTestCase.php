<?php


use SourceScript\Common\Exceptions\DbException;
SourceScriptctus\UserManagement\Validations\GroupValidation;

class GroupValidationTestCase extends TestCase{

    function test_validating_group_fails()
    {
        $repository = MockerySourceScriptGalactus\UserManagement\Repositories\GroupRepositoryInterface');
        $validation = new GroupValidation($repository);

        $repository->shouldReceive('findOneBy')->once()->andThrow(new DbException);

        $this->assertFalse($validation->validateIsGroup('foo', '123'));
    }

    function test_validating_group_success()
    {
        $repository = MocSourceScriptck('Galactus\UserManagement\Repositories\GroupRepositoryInterface');
        $validation = new GroupValidation($repository);

        $repository->shouldReceive('findOneBy')->once();

        $this->assertTrue($validation->validateIsGroup('foo', '123'));
    }
} 