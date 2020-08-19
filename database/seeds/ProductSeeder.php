<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('products')->insert([
         	[
         		'id' => 1,
         		'name' => 'Product 001',
         		'image' => 'public/product1.jpg',
         		'price' => 500000,
                'old_price' => 200000,
         		'quantity' => 100,
         		'sale' => 20
         	],[
         		'id' => 2,
         		'name' => 'Product 002',
         		'image' => 'public/product2.jpg',
         		'price' => 800000,
                'old_price' => 300000,
         		'quantity' => 100,
         		'sale' => 35
         	],[
         		'id' => 3,
         		'name' => 'Product 003',
         		'image' => 'public/product3.jpg',
         		'price' => 200000,
                'old_price' => 100000,
         		'quantity' => 100,
         		'sale' => 15
         	],[
         		'id' => 4,
         		'name' => 'Product 004',
         		'image' => 'public/product4.jpg',
         		'price' => 300000,
                'old_price' => 400000,
         		'quantity' => 100,
         		'sale' => 10
         	],[
         		'id' => 5,
         		'name' => 'Product 005',
         		'image' => 'public/product5.jpg',
         		'price' => 400000,
                'old_price' => 800000,
         		'quantity' => 100,
         		'sale' => 90
         	],[
         		'id' => 6,
         		'name' => 'Product 006',
         		'image' => 'public/product6.jpg',
         		'price' => 900000,
                'old_price' => 700000,
         		'quantity' => 100,
         		'sale' => 20
         	],[
         		'id' => 7,
         		'name' => 'Product 007',
         		'image' => 'public/product7.jpg',
         		'price' => 1400000,
                'old_price' => 300000,
         		'quantity' => 100,
         		'sale' => 30
         	],[
         		'id' => 8,
         		'name' => 'Product 008',
         		'image' => 'public/product8.jpg',
         		'price' => 600000,
                'old_price' => 240000,
         		'quantity' => 100,
         		'sale' => 70
         	]
         ]
     );
    }
}
