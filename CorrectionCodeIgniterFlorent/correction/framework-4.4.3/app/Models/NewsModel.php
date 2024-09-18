<?php

namespace App\Models;

use CodeIgniter\Model;

class NewsModel extends Model
{
    protected $table = "news"; // Commubique avec la table news de la BDD
    protected $returnType = \App\Entities\News::class;
    protected $allowedFields = ['title','slug','body'];
    public function getNews($slug = false)
    {
        if ($slug === false) {
            return $this->findAll();
        }
        return $this->where(['slug'=>$slug])->first();
    }

    public function deleteNews($id)
    {
    // $news =  $this->find($id); 
       $this->delete($id);

    }

    public function updateNews($id)
    {
        $this->update($id);
    }
}
