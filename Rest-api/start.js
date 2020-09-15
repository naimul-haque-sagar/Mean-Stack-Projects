const express=require('express')
const mongoose=require('mongoose')
const movieRouter=require('./routes/movieRoutes')

const dbUrl='mongodb://localhost/mean'

const app=express()

mongoose.connect(dbUrl,{useNewUrlParser:true})
const connection=mongoose.connection
connection.on('open',()=>{
    console.log('connected mongodb')
});

app.use(express.json())
app.use('/movie',movieRouter)

app.listen(9000,()=>{
    console.log('server started 9000')
})