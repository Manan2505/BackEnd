const mongoose=require('mongoose');

// creating schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:[{
        type:String,
        required:true
        
    }],
    role:{
         enum:["Student","Admin","Visitor"]

    }
})
module.exports=mongoose.model("User",userSchema);