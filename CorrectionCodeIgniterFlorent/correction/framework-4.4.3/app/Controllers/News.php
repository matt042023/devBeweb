<?php

namespace App\Controllers;

use App\Models\NewsModel;
use App\Entities\News as NewsEntity;
use CodeIgniter\Exceptions\PageNotFoundException;

class News extends BaseController
{
    public function index()
    {
        $model = model(NewsModel::class);


        $data = [

            'news' => $model->getNews(),
            'title' => 'News archive',
        ];

        return view('templates/header', $data)
            . view('news/index')
            . view('templates/footer');
    }

    public function show($slug = null)
    {
        $model = model(NewsModel::class);

        $data = $model->getNews($slug); // Fais appel au Model pour récupérer les News 

        if (empty($data)) {
            throw new PageNotFoundException('Cannot find the news item' . $slug);
        }
          

        return view('templates/header', [
            'news' => $data,
            'title' => $data->getTitle()
        ])
            . view('news/view')
            . view('templates/footer');

    }

    public function new() // Formulaire!!!!
    {
        helper('form');
        return view('templates/header', ['title' => 'Create a news item'])
        . view('news/create')
        . view('templates/footer');
    }

    public function create()
    {
        helper('form');

        // Checks whether the submitted data passed the validation rules.
        if (! $this->validate([
            'title' => 'required|max_length[255]|min_length[3]',
            'body'  => 'required|max_length[5000]|min_length[10]',
        ])) {
            // The validation fails, so returns the form.
            return $this->new();
        }

        // Gets the validated data.
        $post = $this->validator->getValidated();

        $model = model(NewsModel::class);
        $entity = new NewsEntity();
        $entity->setTitle($post['title']);
        $entity->setSlug(url_title($post['title'], '-', true));
        $entity->setBody($post['body']);

        $model->save(
            $entity
        );

        return view('templates/header', ['title' => 'Create a news item'])
            . view('news/success')
            . view('templates/footer');
    }

    public function deleteNews($id)
    {
        $model= model(NewsModel::class);
        $model->delete($id);
        return redirect()->route('news');
    }

    public function newUpdate()
    {
        helper('form');
        return view('templates/header', ['title' => 'Update a news item'])
        . view('news/update')
        . view('templates/footer');
    }
    
    public function updateNews()
    {
        helper('form');

        // Checks whether the submitted data passed the validation rules.
        if (! $this->validate([
            'title' => 'required|max_length[255]|min_length[3]',
            'body'  => 'required|max_length[5000]|min_length[10]',
        ])) {
            // The validation fails, so returns the form.
            return $this->newUpdate();
        }

        // Gets the validated data.
        $post = $this->validator->getValidated();

        $model = model(NewsModel::class);
        $entity = new NewsEntity();
        $entity->setTitle($post['title']);
        $entity->setSlug(url_title($post['title'], '-', true));
        $entity->setBody($post['body']);

        $model->save(
            $entity
        );

        return view('templates/header', ['title' => 'Create a news item'])
            . view('news/success')
            . view('templates/footer');

    }
}