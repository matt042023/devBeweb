<?php

namespace App\Models;

use App\Entities\User;
use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table = "user";
    protected $returnType = \App\Entities\User::class;

    protected $allowedFields = ['Username', 'Password'];

    public function getUsers($iduser = false)
    {
        if ($iduser === false) {
            return $this->findAll();
        }
        return $this->where(['idUser' => $iduser])->first();
    }
    public function deleteInformation($id)
    {
        $this->where(['idUser' => $id])->delete();
    }
    public function updateUser($idUser, $entity)
    {
        $data = [
            'Username' => $entity->getUsername(),
            'Password' => $entity->getPassword(),
        ];
        if (!empty($data)) {
            // set permet d'indiquer à CODEIGNITEUR les colonnes specifiques que l'on veut modifier
            $this->set($data)->where('idUser', $idUser)->update();
        }
    }
}