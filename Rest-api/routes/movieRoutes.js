const express=require('express')
const router=express.Router()
const Movie=require('../model/movie')

router.get('/',async(req,res)=>{
    try{
        const movie=await Movie.find()
        res.json(movie)
    }catch(err){
        console.log(err)
    }
})

module.exports=router