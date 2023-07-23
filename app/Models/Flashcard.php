<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flashcard extends Model
{
    use HasFactory;

    //request->all()でカラムにインサートする場合はこれを書く必要がある
    protected $fillable = ['user_id','title','access'];

    
    public function user(){
        return $this->BelongsTo('App\Models\User');
    }
    
}
