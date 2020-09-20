var express = require('express');
var router = express.Router();
const request=require('request')

var key='1fb720b97cc13e580c2c35e1138f90f8'
const currentShow = `http://api.themoviedb.org/3/movie/now_playing?api_key=${key}`
const imageUrlPrefix = 'http://image.tmdb.org/t/p/w300'

router.use((req,res,next)=>{
  res.locals.imageUrlPrefix=imageUrlPrefix
  next()
})

router.get('/', function(req, res, next) {
  request.get(currentShow,(error,response,result)=>{
    const data=JSON.parse(result)

    res.render('index',{
      movieData:data.results
    })
  })
});

module.exports = router;
