const express=require('express')
const mongoose=require('mongoose')

const dbUrl='mongodb://localhost/mean'

const app=express()

mongoose.connect(dbUrl,{useNewUrlParser:true})
const connection=mongoose.connection
connection.on('open',()=>{
    console.log('connected mongodb')
});

const movieRouter=require('./routes/movie')
app.use('/movie',movieRouter)

app.listen(9000,()=>{
    console.log('server started 9000')
})