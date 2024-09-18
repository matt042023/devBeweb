<?php

namespace App\Controllers;

use App\Models\UserModel;
use App\Models\ProductModel;
use App\Models\PersonnelModel;
use CodeIgniter\Shield\Models\UserModel as ShieldUserModel;
use App\Entities\User as UserEntity;
use CodeIgniter\Exceptions\PageNotFoundException;

class User extends BaseController
{
    public function index()
    {
        $model = model(UserModel::class);
        $model2 = model(ProductModel::class);
        $model3 = model(PersonnelModel::class);
        $model4 = model(ShieldUserModel::class);
        $data = [
            'users' => $model->getUsers(),
            'products' => $model2->getProducts(),
            'personnel' => $model3->getPersonnels(),
            'userIdentify' => $model3->getPersonnels(),
            'title' => 'Page Administrateur',
        ];

        return view('templates/header', $data)
            . view('users/index')
            . view('templates/footer');
    }
    public function getById($id)
    {
        $model = model(UserModel::class);
        $data = $model->getUsers($id);

        if (empty($data)) {
            throw new PageNotFoundException('Cannot find the news item' . $id);
        }
        return view('templates/header', [
            'news' => $data,
            'title' => "Onglet Administrateur"
        ])
            . view('users/view')
            . view('templates/footer');

    }
    public function deleteUser($id)
    {
        $model = model(UserModel::class);
        $model->deleteInformation($id);
        return redirect()->route('users');
    }
    public function newUser()
    {
        helper('form');
        return view('templates/header', ['title' => 'Creer un Nouvel Utilisateur'])
            . view('users/createUser')
            . view('templates/footer');
    }
    public function createUser()
    {
        helper('form');
        if (
            !$this->validate([
                'Username' => 'required|max_length[255]|min_length[3]',
                'Password' => 'required|max_length[5000]|min_length[6]',
            ])
        ) {
            return $this->newUser();
        }
        $post = $this->validator->getValidated();
        $model = model(UserModel::class);
        $entity = new UserEntity();
        $entity->setUsername($post['Username']);
        //Password_hash est natif de PHP;PASSWORD_BCRYPT indique que l'algorithme de hachage Bcrypt doit être utilisé.
        $bcrypt = password_hash($post['Password'], PASSWORD_BCRYPT);
        $entity->setPassword($bcrypt);
        $model->save($entity);
        $model->save(
            $entity
        );

        return view('templates/header', ['title' => 'Create a news item'])
            . view('news/success')
            . view('templates/footer');
    }
    public function newUpdateUser($id)
    {
        helper('form');
        return view('templates/header', ['title' => 'Créer un Nouvel Utilisateur'])
            . view('users/updateUser', ['id' => $id])
            . view('templates/footer');
    }
    public function updateUser($id)
    {
        if (
            !$this->validate([
                'Username' => 'required|max_length[255]|min_length[3]',
                'Password' => 'required|max_length[5000]|min_length[3]',
            ])
        ) {
            return $this->newUpdateUser($id);
        }
        $post = $this->validator->getValidated();
        var_dump($post);
        $model = model(UserModel::class);
        $entity = new UserEntity();
        $entity->setUsername($post['Username']);
        $bcrypt = password_hash($post['Password'], PASSWORD_BCRYPT);
        $entity->setPassword($bcrypt);
        $model->updateUser($id, $entity);
        return redirect()->to('users');
    }
}

