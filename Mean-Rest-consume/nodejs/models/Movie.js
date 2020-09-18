const mongoose=require('mongoose')

var Movie=new mongoose.model({
    title:{
        type:String,
        require:true
    },
    year:{
        type:Number,
        require:true
    },
    runtime:{
        type:String,
        require:true
    },
    director:{
        type:String,
        require:true
    },
    production:{
        type:String,
        require:true
    }
})

module.exports=Movie