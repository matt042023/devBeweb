<?php

use CodeIgniter\Router\RouteCollection;
//use App\Controllers\Pages;
//use App\Controllers\News;
use App\Controllers\User;
use App\Controllers\Personnel;
use App\Controllers\Product;

/**
 * @var RouteCollection $routes
 */

$routes->get('users', [User::class, 'index']);
$routes->get('newUser', [User::class, 'newUser']);
$routes->get('newProduct', [Product::class, 'newProduct']);
$routes->get('newPersonnel', [Personnel::class, 'newPersonnel']);
$routes->post('createUser', [User::class, 'createUser']);
$routes->post('createProduct', [Product::class, 'createProduct']);
$routes->post('createPersonnel', [Personnel::class, 'createPersonnel']);
$routes->get('newUpdateUser/(:segment)',[User::class,'newUpdateUser']);
$routes->get('newUpdateProduct/(:segment)',[Product::class,'newUpdateProduct']);
$routes->get('newUpdatePersonnel/(:segment)',[Personnel::class,'newUpdatePersonnel']);
$routes->post('userUpdate/(:segment)',[User::class,'updateUser']);
$routes->post('productUpdate/(:segment)',[Product::class,'updateProduct']);
$routes->post('personnelUpdate/(:segment)',[Personnel::class,'updatePersonnel']);
$routes->get('users/(:segment)', [User::class, 'getById']);
$routes->get('product/(:segment)', [Product::class, 'getByIdProduct']);
$routes->get('personnel/(:segment)', [Personnel::class, 'getByIdPersonnel']);
$routes->get("deleteUser/(:segment)",[User::class,"deleteUser"]);
$routes->get("deleteProduct/(:segment)",[Product::class,"deleteProduct"]);
$routes->get("deletePersonnel/(:segment)",[Personnel::class,"deletePersonnel"]);

service('auth')->routes($routes);

// $routes->get('news', [News::class, 'index']);
// $routes->get('news/new', [News::class, 'new']); 
// $routes->post('news', [News::class, 'create']);
// $routes->get('update/(:segment)',[News::class,'newupdate']);
// $routes->post('news/UpSave',[News::class,'updateNews']); 
// $routes->get('news/(:segment)', [News::class, 'show']);
// $routes->get("delete/(:segment)",[News::class,"deleteNews"]);


// $routes->get('pages', [Pages::class, 'index']);
// $routes->get('(:segment)', [Pages::class, 'view']);

