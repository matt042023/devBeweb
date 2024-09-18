<?php

namespace App\Controllers;

use App\Models\PersonnelModel;

use App\Entities\Personnel as PersonnelEntity;

use CodeIgniter\Exceptions\PageNotFoundException;

class Personnel extends BaseController
{
    public function getByIdPersonnel($id)
    {
        $model3 = model(PersonnelModel::class);

        $data = $model3->getPersonnels($id);

        if (empty($data)) {
            throw new PageNotFoundException('Cannot find the news item' . $id);
        }
        return view('templates/header', [
            'news' => $data,
            'title' => "Onglet Administrateur"
        ])
            . view('users/view3')
            . view('templates/footer');
    }
    public function deletePersonnel($id)
    {
        $model3 = model(PersonnelModel::class);
        $model3->deleteInformation($id);
        return redirect()->route('users');
    }
    public function newPersonnel()
    {
        helper('form');
        return view('templates/header', ['title' => 'Creer un Nouvel Employé'])
            . view('users/createPersonnel')
            . view('templates/footer');
    }
    public function createPersonnel()
    {
        helper('form');
        if (
            !$this->validate([
                'Nom' => 'required|max_length[255]|min_length[3]',
                'Prenom' => 'required|max_length[5000]|min_length[1]',
            ])
        ) {
            return $this->newPersonnel();
        }
        $post = $this->validator->getValidated();
        $model = model(PersonnelModel::class);
        $entity = new PersonnelEntity();
        $entity->setNom($post['Nom']);
        $entity->setPrenom($post['Prenom']);
        $model->save(
            $entity
        );

        return view('templates/header', ['title' => 'Create a news item'])
            . view('news/success')
            . view('templates/footer');
    }
    public function newUpdatePersonnel($id)
    {
        helper('form');
        return view('templates/header', ['title' => 'Créer un Nouvel Utilisateur'])
            . view('users/updatePersonnel', ['id' => $id])
            . view('templates/footer');
    }

    public function updatePersonnel($id)
    {
        if (
            !$this->validate([
                'Nom' => 'required|max_length[255]|min_length[3]',
                'Prenom' => 'required|max_length[5000]|min_length[1]',
            ])
        ) {
            return $this->newUpdatePersonnel($id);
        }
        $post = $this->validator->getValidated();
        var_dump($post);
        $model = model(PersonnelModel::class);
        $entity = new PersonnelEntity();
        $entity->setNom($post['Nom']);
        $entity->setPrenom($post['Prenom']);
        $model->updatePersonnel($id, $entity);
        return redirect()->to('users');
    }
}