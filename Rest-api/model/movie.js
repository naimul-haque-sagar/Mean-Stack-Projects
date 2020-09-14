const mongoose=require('mongoose')

const movieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    producer:{
        type:String,
        required:true
    },
    actor:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Movie',movieSchema)