<?php

namespace App\Models;

use CodeIgniter\Model;

class PersonnelModel extends Model
{
    protected $table = "personnel";
    protected $returnType = \App\Entities\Personnel::class;

    protected $allowedFields = ['Nom', 'Prenom'];

    public function getPersonnels($idPersonnel = false)
    {
        if ($idPersonnel === false) {
            return $this->findAll();
        }
        return $this->where(['idPersonnel' => $idPersonnel])->first();
    }
    public function deleteInformation($id)
    {
        $this->where(['idPersonnel' => $id])->delete();

    }
    public function updatePersonnel($idPersonnel, $entity)
    {
        $data = [
            'Nom' => $entity->getNom(),
            'Prenom' => $entity->getPrenom(),
        ];
        if (!empty($data)) {
            $this->set($data)->where('idPersonnel', $idPersonnel)->update();
        }
    }
}