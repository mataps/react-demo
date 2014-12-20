<?php


class MainControllerTest extends TestCase{

    /**
     * You cannot make a 'call' to route/controller twice
     * so we're testing everything here
     */
    function test_route_testing()
    {
        Route::enableFilters();

        /**
         * test_guests_should_be_redirected_to_login_page
         */
        $this->call('GET', '/');

        $this->assertRedirectedTo('/login');

        /**
         * test_user_should_be_redirected_to_homepage
         */
        $user = new User;;
        $this->be($user);

        $this->call('GET', 'login');
        $this->assertRedirectedTo('/');

        /**
         * test_user_should_be_redirected_to_homepage
         */
        $user = new User;;
        $this->be($user);

        $this->call('GET', 'logout');

        $this->assertRedirectedTo('/login');
    }
}