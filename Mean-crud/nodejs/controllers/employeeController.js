const express=require('express')
const router=express.Router()

var Employee=require('../models/employee')
var ObjectId=require('mongoose').Types.ObjectId

router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err) res.send(docs)
        else console.log('error happened' +err)
    })
})

router.post('/',(req,res)=>{
    var employee=new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    })
    employee.save((err,doc)=>{
        if(!err) res.send(doc)
        else console.log('error happened'+err)
    })
})

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with this id'+${req.params.id}`)

    Employee.findById(req.params.id,(err,docs)=>{
        if(!err) res.send(docs)
        else console.log('error happened'+JSON.stringify(err))
    })
})

router.put('/:id',(req,res)=>{  
    if(!ObjectId.isValid(req.params.id)) 
    return res.status(404).send(`no record found for ${req.params.id}`)

    var employee={
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    }

    Employee.findByIdAndUpdate(req.params.id,{$set:employee},{new :true},(err,doc)=>{
        if(!err) res.send(doc)
        else console.log("error occured"+JSON.stringify(err))
    })
})

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)) 
    return res.status(404).send(`no record found for ${req.params.id}`)

    Employee.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(!err) res.send(docs)
        else console.log("error happened for this operation")
    })
})

module.exports=router