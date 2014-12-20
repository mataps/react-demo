<?php

use SourceScript\UserManagement\Transformers\UserTransformer;

class UserTransformerTest extends DbTestCase{

    function test_transforming_a_valid_user()
    {
        $model = User::first();

        $expected = array(
            'id' => (int) $model->id,
            'group' => 'foo',
            'username' => $model->username,
            'updated_at' => (string)$model->updated_at,
            'created_at' => (string)$model->created_at,
        );

        $groupTransformer = Mockery::moSourceScriptctus\UserManagement\Transformers\GroupTransformer');
        $userTransformer = new UserTransformer($groupTransformer);

        $groupTransformer->shouldReceive('transform')->once()->andReturn('foo');

        $result = $userTransformer->transform($model);

        $this->assertEquals($expected, $result);
    }
} 