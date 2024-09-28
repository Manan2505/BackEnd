const mongoose=require('mongoose');
require('dotenv').config();
const dbConnect=async(req,res)=>{
    try{
        mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            family:4
        })
        console.log('DB CONNECTED SUCCESSFULLY');

    }catch(error){
        console.log("DB CONNECTION FAILED "+error.message);
    }
}

module.exports=dbConnect;