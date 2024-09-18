<?php

namespace App\Entities;


class News
{
    protected $id; // Se trouve dans la BDD
    protected $title;
    protected $slug;
    protected $body;

    // public function __construct($id, $title, $slug, $body)
    // {
    //     $this->id = $id;
    //     $this->title = $title;
    //     $this->slug = $slug;
    //     $this->body = $body;
    // }

    public function getId()
    {
        return $this->id;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getSlug()
    {
        return $this->slug;
    }

    public function getBody()
    {
        return $this->body;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }

    public function setSlug($slug)
    {
        $this->slug = $slug;
    }

    public function setBody($body)
    {
        $this->body = $body;
    }

}