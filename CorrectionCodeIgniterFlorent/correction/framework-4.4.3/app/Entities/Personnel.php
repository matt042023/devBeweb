<?php
namespace App\Entities;

class Personnel extends User
{
    protected $idPersonnel;

    protected $Nom;

    protected $Prenom;

    public function getIdpersonnel()
    {
        return $this->idPersonnel;
    }
    public function getNom()
    {
        return $this->Nom;
    }
    public function getPrenom()
    {
        return $this->Prenom;
    }
    public function setIdpersonnel($idPersonnel)
    {
        $this->idPersonnel = $idPersonnel;
    }
    public function setNom($Nom)
    {
        $this->Nom = $Nom;
    }
    public function setPrenom($Prenom)
    {
        $this->Prenom = $Prenom;
    }
}