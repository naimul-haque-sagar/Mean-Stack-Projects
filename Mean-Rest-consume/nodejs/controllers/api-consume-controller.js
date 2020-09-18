const express=require('express')
const request = require('request')
const requestPromise= require('request-promise-native')
const fetch= require('node-fetch')
var helper=require('../helper/api-consume-helper')

const router=express.Router()
 
router.get('/r1/getData/:id', (req, res) => {
    requestPromise({
        uri: 'http://www.omdbapi.com/?i='+req.params.id+'&apikey=552972b6',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    })
    .then(parsedBody => {
        res.send(helper.getOutput(parsedBody))
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/r2/getData/:id',(req, res)=> {
    var url = 'http://www.omdbapi.com/?i='+req.params.id+'&apikey=552972b6'
     
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send(helper.getOutput(data))
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/r3/getData/:title',(req,res)=>{
    var url='http://www.omdbapi.com/?s='+req.params.title+'&apikey=552972b6'

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        res.send(helper.getOutput1(data))
    })
    .catch(err=>{
        res.send(err)
    })
})

router.get('/r4/getTitle/:title', (req, res) => {
    requestPromise({
        uri: 'http://www.omdbapi.com/?s='+req.params.title+'&apikey=552972b6',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    })
    .then(parsedBody => {
        res.send(helper.getOutput2(parsedBody))
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports=router