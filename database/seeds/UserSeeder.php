<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
	            'id' => 1,
	            'username'=> 'admin',
	            'password'=> '$2y$10$rW5sD8s/JarGxC7FV3/OguO4Q.CdnKIXdT2UU1HaPibOHqnZy.Yo6',
	            'email' => 'admin@gmail.com',
                'address'=> '101 Le Huu Trac',
                'role'=> 'admin'
            ],[
                'id' => 2,
	            'username'=> 'user',
	            'password'=> '$2y$10$rW5sD8s/JarGxC7FV3/OguO4Q.CdnKIXdT2UU1HaPibOHqnZy.Yo6',
	            'email' => 'user@gmail.com',
                'address'=> '101 Le Huu Trac',
                'role'=> 'user'
            ]
            ]);
    }
}
