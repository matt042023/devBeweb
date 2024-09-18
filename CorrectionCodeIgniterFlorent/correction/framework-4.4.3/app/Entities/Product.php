<?php
namespace App\Entities;

class Product extends User
{
    protected $idProduct;

    protected $ProductName;

    protected $Quantite;

    public function getIdProduct()
    {
        return $this->idProduct;
    }
    public function getProductName()
    {
        return $this->ProductName;
    }
    public function getQuantite()
    {
        return $this->Quantite;
    }
    public function setIdProduct($idProduct)
    {
        $this->idProduct = $idProduct;
    }
    public function setProductName($ProductName)
    {
        $this->ProductName = $ProductName;
    }
    public function setQuantite($Quantite)
    {
        $this->Quantite = $Quantite;
    }
}