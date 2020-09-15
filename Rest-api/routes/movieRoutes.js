const express=require('express')
const router=express.Router()
const Movie=require('../model/movie')

router.get('/',async(req,res)=>{
    try{
        const movie=await Movie.find()
        res.json(movie)
    }catch(err){
        res.send(err)
    }
})

router.post('/',async (req,res)=>{
    const movie=new Movie({
        name:req.body.name,
        director:req.body.director,
        producer:req.body.producer,
        actor:req.body.actor
    })

    try{
        const movieInstance=await movie.save()
        res.json(movieInstance)
    }catch(err){
        res.send(err)
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const getMovie=await Movie.findById(req.params.id)
        res.send(getMovie)
    }catch(err){
        res.send(err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const movieInstance=await Movie.findById(req.params.id)
        movieInstance.actor=req.body.actor
        const finalInstance=await movieInstance.save()
        res.json(finalInstance)
    }catch(err){
        res.send(err)
    }
})



module.exports=router