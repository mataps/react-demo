<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{	
		Eloquent::unguard();

        if (Config::get('database.default') == 'mysql')
        {
            //disable foreign key checks
            DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        }

        //record the start time
        $time_start = microtime(true);

        $this->runRequiredSeeders();

        if (App::environment() !== 'production')
        {
            $this->runDummySeeders();
        }

        if (Config::get('database.default') == 'mysql')
        {
            //enable foreign key checks
            DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        }

        $time_end = microtime(true);
        $time = $time_end - $time_start;
        echo "Seeding completed: $time seconds\n";
	}

    /**
     * Run essential seeders for the application
     * @return void
     */
    private function runRequiredSeeders()
    {
//        $this->call('DefaultPermissionsSeeder');
//        $this->call('DefaultGroupsSeeder');
//        $this->call('AdminUserSeeder');
//        $this->call('AttributionsSeeder');
//        $this->call('TransactionAccountsSeeder');
    }

    /**
     * Dummy Seeders for local environment
     * @return void
     */
    private function runDummySeeders()
    {
//        $this->call('UsersSeeder');
//        $this->call('DistrictsSeeder');
//        $this->call('CitiesMunicipalitiesSeeder');
//        $this->call('BarangaysSeeder');
//        $this->call('ResidentsSeeder');
//        $this->call('LastnamesCounter');
//        $this->call('HouseholdsSeeder');
//        $this->call('AffiliationsSeeder');
//        $this->call('ScholarshipsSeeder');
//        $this->call('AttributionsSeeder');
//        // $this->call('TransactionsSeeder');
//        $this->call('TransactionCategoriesSeeder');
//        $this->call('TransactionCategoryItemsSeeder');
//        $this->call('TransactionsSeeder');
    }
}
