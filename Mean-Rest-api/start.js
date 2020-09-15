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

const port=process.env.PORT || 9000
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})