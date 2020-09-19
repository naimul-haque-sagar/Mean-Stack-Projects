const express=require('express')
var Movie=require('../models/Movie')
var ObjectId=require('mongoose').Types.ObjectId

var router=express.Router()

router.get('/byId/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with this id found ${req.params.id}`)

    Movie.findById(req.params.id,(err,docs)=>{
        if(!err) res.send(docs)
        else console.log('error happened'+JSON.stringify(err))
    })
})

router.get('/byTitle/:title',(req,res)=>{
    Movie.findOne({title:req.params.title},(err,doc)=>{
        if(!err) res.send(doc)
        else console.log('no data found '+err)
    })
})

router.put('/update/:id',(req,res)=>{  
    if(!ObjectId.isValid(req.params.id)) 
    return res.status(404).send(`no record found for ${req.params.id}`)

    var movie={
        title:req.body.title,
        year:req.body.year,
        runtime:req.body.runtime,
        director:req.body.director,
        production:req.body.production
    }

    Movie.findByIdAndUpdate(req.params.id,{$set:movie},{new :true},(err,doc)=>{
        if(!err) res.send(doc)
        else console.log("error occured"+JSON.stringify(err))
    })
})

router.delete('/delete/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)) 
    return res.status(404).send(`no record found for ${req.params.id}`)

    Movie.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(!err) res.send(docs)
        else console.log("error happened for this operation")
    })
})

module.exports=router