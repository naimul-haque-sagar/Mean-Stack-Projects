const mongoose=require('mongoose')

var Movie2=new mongoose.model('Movie2',{
    title:{
        type:String,
        require:true
    },
    year:{
        type:String,
        require:true
    },
    imdbID:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    poster:{
        type:String,
        require:true
    }
})

module.exports=Movie2