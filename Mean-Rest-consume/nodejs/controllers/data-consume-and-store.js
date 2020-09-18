const express=require('express')
const router=express.Router()
const requestPromise=require('request-promise-native')
const fetch=require('node-fetch')
const dataStore=require('../helper/data-consume-store-helper')

router.get('/r1/saveById/:id',(req,res)=>{
    requestPromise({
        uri:'http://www.omdbapi.com/?i='+req.params.id+'&apikey=552972b6',
        headers:{
            'User-Agent':'Request-Promise'
        },
        json:true
    })
    .then(parsedBody=>{
        res.send('successfully saved a record')
        try{
            dataStore.saveById(parsedBody)
        }catch(err){
            console.log(err)
        }
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/r2/saveById/:id',(req,res)=>{
    var url='http://www.omdbapi.com/?i='+req.params.id+'&apikey=552972b6'
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send('successfully saved a record')
        try{
            dataStore.saveById(data)
        }catch(err){
            console.log(err)
        }
    })
    .catch(err=>res.send(err))
})

router.get('/r3/saveByTitle/:title',(req,res)=>{
    requestPromise({
        uri:'http://www.omdbapi.com/?s='+req.params.title+'&apikey=552972b6',
        headers:{
            'User-Agent':'Request-Promise'
        },
        json:true
    })
    .then(parsedBody=>{
        res.send('successfully saved a record')
        try{
            dataStore.saveByTitle(parsedBody)
        }catch(err){
            console.log(err)
        }
    })
    .catch(err=>{
        res.send(err)
    })
})


router.get('/r4/saveByTitle/:title',(req,res)=>{
    var url='http://www.omdbapi.com/?s='+req.params.title+'&apikey=552972b6'
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send('successfully saved a record')
        try{
            dataStore.saveByTitle(data)
        }catch(err){
            console.log(err)
        }
    })
    .catch(err=>res.send(err))
})

module.exports=router