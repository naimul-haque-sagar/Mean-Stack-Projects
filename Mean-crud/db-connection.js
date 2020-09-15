const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/mean-crud',(err)=>{
    if(!err) console.log('successful database connection')
    else console.log('error database connection'+JSON.stringify(err))
})


module.exports=mongoose