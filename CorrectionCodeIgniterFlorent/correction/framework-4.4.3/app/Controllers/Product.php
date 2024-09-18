<?php
namespace App\Controllers;

use App\Models\ProductModel;
use App\Entities\Product as ProductEntity;
use CodeIgniter\Exceptions\PageNotFoundException;

class Product extends BaseController
{
    public function getByIdProduct($id)
    {
        $model2 = model(ProductModel::class);
        $data = $model2->getProducts($id);

        if (empty($data)) {
            throw new PageNotFoundException('Cannot find the news item' . $id);
        }
        return view('templates/header', [
            'news' => $data,
            'title' => "Onglet Administrateur"
        ])
            . view('users/view2')
            . view('templates/footer');
    }
    public function deleteProduct($id)
    {
        $model2 = model(ProductModel::class);
        $model2->deleteInformation($id);
        return redirect()->route('users');
    }
    public function newProduct()
    {
        helper('form');
        return view('templates/header', ['title' => 'Creer un Nouveau Produit'])
            . view('users/createProduct')
            . view('templates/footer');
    }

    public function createProduct()
    {
        helper('form');
        if (
            !$this->validate([
                'ProductName' => 'required|max_length[255]|min_length[3]',
                'Quantite' => 'required|max_length[5000]|min_length[1]',
            ])
        ) {
            return $this->newProduct();
        }
        $post = $this->validator->getValidated();
        $model = model(ProductModel::class);
        $entity = new ProductEntity();
        $entity->setProductName($post['ProductName']);
        $entity->setQuantite($post['Quantite']);
        $model->save(
            $entity
        );

        return view('templates/header', ['title' => 'Create a news item'])
            . view('news/success')
            . view('templates/footer');
    }
    public function newUpdateProduct($id)
    {
        helper('form');
        return view('templates/header', ['title' => 'Créer un Nouvel Utilisateur'])
            . view('users/updateProduct', ['id' => $id])
            . view('templates/footer');
    }
    public function updateProduct($id)
    {
        if (
            !$this->validate([
                'ProductName' => 'required|max_length[255]|min_length[3]',
                'Quantite' => 'required|max_length[5000]|min_length[1]',
            ])
        ) {
            return $this->newUpdateProduct($id);
        }
        $post = $this->validator->getValidated();
        var_dump($post);
        $model = model(ProductModel::class);
        $entity = new ProductEntity();
        $entity->setProductName($post['ProductName']);
        $entity->setQuantite($post['Quantite']);
        $model->updateProduct($id, $entity);
        return redirect()->to('users');
    }
}