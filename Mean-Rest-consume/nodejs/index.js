const db=require('./db-connection')
const express=require('express')
const cors=require('cors')
const apiConsumeCcontroller=require('./controllers/api-consume-controller')
const dataStore=require('./controllers/data-consume-and-store')
const getData=require('./controllers/returns-data')

const port=process.env.port||8000

var app=express()
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}))

app.listen(port,()=>{
    console.log(`server start at ${port}`)
})

app.use('/movie',apiConsumeCcontroller)
app.use('/store',dataStore)
app.use('/crud',getData)
