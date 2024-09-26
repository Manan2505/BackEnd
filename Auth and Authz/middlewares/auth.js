const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.auth=async(req,res,next)=>{
    try{
        const token=req.cookies.token || req.body.token ||req.header("Authorization").replace("Bearer ","");
        console.log(token)
        //verify token
        try{
        let verify=jwt.verify(token,process.env.JWT_SECRET);
        if(!verify){
            return res.send("Token doesnot match")
        }
        console.log(verify);
        req.user=verify;
    }catch(error){
        return res.send("Error in verifying token")
    }
        next();

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Error in auth middleware",
            error:error.message
        })
    }
}

exports.isStudent=async(req,res,next)=>{
    try{
        if(req.user.role!=="Student"){
             res.send("You r not student")
        }
        next();

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Error in isStudent middleware",
            error:error.message
        })
    }
}

exports.isAdmin=async(req,res,next)=>{
    try{
        if(req.user.role!=="Admin"){
             res.send("You r not Admin")
        }
        next();

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Error in isAdmin middleware",
            error:error.message
        })
    }
}