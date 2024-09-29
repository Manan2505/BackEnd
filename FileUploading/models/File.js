const mongoose=require('mongoose');
const nodemailer=require('../config/nodemailer');
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

file.post('save',async(doc)=>{
    nodemailer(doc);
})

module.exports=mongoose.model("fileSchema",file);