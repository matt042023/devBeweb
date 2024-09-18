<?php

namespace App\Entities;

class User
{
    protected $idUser;

    protected $Username;

    protected $Password;

    public function getId()
    {
        return $this->idUser;
    }
    public function getUsername()
    {
        return $this->Username;
    }
    public function getPassword()
    {
        return $this->Password;
    }
    public function setId($idUser)
    {
        $this->idUser = $idUser;
    }
    public function setUsername($Username)
    {
        $this->Username = $Username;
    }
    public function setPassword($Password)
    {
        $this->Password = $Password;
    }
}