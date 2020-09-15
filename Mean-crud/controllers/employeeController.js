const express=require('express')
const router=express.Router()

var Employee=require('../models/employee')

router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err) res.send(docs)
        else console.log('error happened' +err)
    })
})

module.exports=router