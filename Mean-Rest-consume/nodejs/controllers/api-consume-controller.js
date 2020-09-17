const express=require('express')
const request = require('request')
const requestPromise= require('request-promise-native')
const fetch= require('node-fetch')

const router=express.Router()
 
router.get('/r1/:id', (req, res) => {
    requestPromise({
        uri: 'http://www.omdbapi.com/?i='+req.params.id+'&apikey=552972b6',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    })
    .then(parsedBody => {
        res.send(parsedBody);
    })
    .catch(err => {
        res.send(err);
    });
});

router.get('/r2/:id', function (req, res) {
    var url = 'http://www.omdbapi.com/?i='+id+'&apikey=552972b6'
     
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
});

module.exports=router