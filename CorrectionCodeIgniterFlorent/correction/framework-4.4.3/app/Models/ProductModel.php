<?php

namespace App\Models;

use CodeIgniter\Model;

class ProductModel extends Model
{
    protected $table = "product";
    protected $returnType = \App\Entities\Product::class;
    protected $allowedFields = ['ProductName','Quantite'];
    public function getProducts($idProduct = false)
    {
        if ($idProduct === false) {
            return $this->findAll();
        }
        return $this->where(['idProduct'=>$idProduct])->first();
    }
    public function deleteInformation($id)
    {
        $this->where(['idProduct'=>$id])->delete();
    }
    public function updateProduct($idProduct, $entity)
    {
        $data = [
            'ProductName' => $entity->getProductName(),
            'Quantite' => $entity->getQuantite(),
        ];
        if (!empty($data)) {
            $this->set($data)->where('idProduct', $idProduct)->update();
        }
    }

}