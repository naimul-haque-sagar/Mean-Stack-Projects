const { json } = require('express');
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

router.get('/movie/:id',(req,res,next)=>{
  const id=req.params.id
  const url=`http://api.themoviedb.org/3/movie/${id}?api_key=${key}`

  request.get(url,(error,response,result)=>{
    const responseData=JSON.parse(result)
    res.render('movie',{
      responseData
    })
  })
})

router.post('/search',(req,res,next)=>{
  const searchBy=encodeURI(req.body.searchByCredentials)
  const category=req.body.category
  const url=`http://api.themoviedb.org/3/search/${category}?query=${searchBy}&api_key=${key}`

  request.get(url,(error,response,result)=>{
    let movieData=JSON.parse(result)
    console.log(movieData)
    
    res.render('index',{
      movieData:movieData.results
    })
  })
})

module.exports = router;
