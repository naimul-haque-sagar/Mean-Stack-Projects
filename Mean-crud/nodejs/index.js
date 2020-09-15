const dbConnection=require('./db-connection')
const employeeController=require('./controllers/employeeController.js')
const express=require('express')

const port=process.env.port||8000

var app=express()
app.use(express.json())
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})

app.use('/employees',employeeController)