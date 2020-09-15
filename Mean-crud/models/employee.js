const mongoose=require('mongoose')

var Employee=new mongoose.model('Employee',{
    name:{
        type:String,
        require:true
    },
    position:{
        type:String,
        require:true
    },
    office:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
})

module.exports=Employee