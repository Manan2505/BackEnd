const mongoose=require('mongoose');
const Schema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
        maxLength:10
    },
    desc:{
        type:String,
        required:true,
        maxLength:50
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
})
module.exports=mongoose.model("Schema",Schema);