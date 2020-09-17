const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/mean-consume',(err)=>{
    if(!err) console.log('successful db connection')
    else console.log('error db connection'+JSON.stringify(err))
})

module.exports=mongoose