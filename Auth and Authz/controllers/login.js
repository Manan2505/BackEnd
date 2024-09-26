const userSchema=require('../models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

require("dotenv").config();
exports.login=async(req,res)=>{
    try{
        //fetch details from request body
        const {email,password}=req.body;
        // check details
        if(!email ||!password){
            return res.send("Please enter details carefully");
        }
        // check if user exists in db
        const user=await userSchema.findOne({email});
        if(!user){
            return res.send("User is not registered")
        }
        const payload={
            email:user.email,
            role:user.role,
            id:user._id
        }
        
        // Mathing password
        let checkPassword=await bcrypt.compare(password,user.password);
        if(checkPassword){
            //create token
            let token =jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});
            user.token=token;
            user.password=undefined
            const options={
                expires:new Date(Date.now()+24*60*60*1000),
                httpOnly:true
            }
             res.cookie("token",token,options).status(200).json({
                success:true,
                message:"User logged in successfully",
                token:token
            })
             
        }else{
             res.status(400).json({
                message:"Password incorrect"
            })
        }

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Error in login controller",
            error:error.message
        })
    }
}