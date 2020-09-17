const db=require('./db-connection')
const express=require('express')
const cors=require('cors')
const apiConsumeCcontroller=require('./controllers/api-consume-controller')

const port=process.env.port||8000

var app=express()
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}))

app.listen(port,()=>{
    console.log(`server start at ${port}`)
})

app.use('/movie',apiConsumeCcontroller)
