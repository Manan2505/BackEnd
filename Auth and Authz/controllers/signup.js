const userSchema=require('../models/User');
const bcrypt=require('bcrypt');
exports.signup=async(req,res)=>{
    try{
        const {name,email,role,password}=req.body;
        // checking existing emails
        let checkEmail=await userSchema.findOne({email});
        if(checkEmail){
            return res.send("User with this email already exists");
        }
        // password constraints
        if(password.length<8){
            return res.send("Minimum password length should be 8")
        }
        //email constraints
        if(!email.includes("@")){
            return res.send("Enter valid email");
        }
        // hashing password
        let hashedPassword;
        try{
         hashedPassword=await bcrypt.hash(password,10);
        }catch(error){
            return res.send("Error in hashing password ->"+error.message);
        }

        //creating entry in db
        const updateUser=await userSchema.create({name,email,role,password:hashedPassword});
        //sending acknowledgement
        res.status(200).json({
            success:true,
            message:"User signed up successfully",
            user:updateUser
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"Signup failed",
            error:error.message
        })
    }
}