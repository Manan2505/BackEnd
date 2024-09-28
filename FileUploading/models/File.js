const mongoose=require('mongoose');

const file=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imgUrl:{
        type:String
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }
})

module.exports=mongoose.model("fileSchema",file);