const mongoose=require('mongoose');
require('dotenv').config();
const dbConnect=async(req,res)=>{
    try{
        mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            family:4
        })
        console.log('DB connected successfully');
        
    }catch(error){
        console.log('error in db connectivity '+error);
    }
}
module.exports=dbConnect;