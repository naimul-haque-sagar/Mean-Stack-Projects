 const { response } = require('express')
const express=require('express')
var Movie=require('../models/Movie')
var Movie2=require('../models/Movie2')

 const router=express.Router()

function saveById(parsedBody){
    var movie=new Movie({
        title:parsedBody.Title,
        year:parsedBody.Year,
        runtime:parsedBody.Runtime,
        director:parsedBody.Director,
        production:parsedBody.Production
    })

    movie.save((err,docs)=>{
        if(!err) console.log('saved one movie entity')
        else console.log('error saving movie entity'+err)
    })
}

function saveByTitle(parsedBody){
    var result=parsedBody.Search
    
    for(i=0;i<5;i++){
        var movie=new Movie2({
            title:result[i].Title,
            year:result[i].Year,
            imdbID:result[i].imdbID,
            type:result[i].Type,
            poster:result[i].Poster
        })
    
        movie.save((err,docs)=>{
            if(!err){
                console.log('saved one entity')
            }else{
                console.log('error happened while saving entity'+err)
            }
        })
    }
}

module.exports=router
module.exports.saveById=saveById
module.exports.saveByTitle=saveByTitle
