const cloudinary=require('cloudinary').v2;
require('dotenv').config();
const cloudConnect=async(req,res)=>{
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET
        })
        console.log('cloudinary connection successful')
    }catch(error){
        console.log('cloudinary connection failed '+error.message)
    }
}

module.exports=cloudConnect