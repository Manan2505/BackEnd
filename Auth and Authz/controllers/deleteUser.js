const userSchema=require('../models/User');
const bcrypt=require('bcrypt');
exports.deleteUser=async(req,res)=>{
    try{
        const {id}=req.body;
        let deleteUser=await userSchema.findByIdAndDelete({_id:id});
        return res.status(200).json({
            success:true,
            message:"User removed successfully"
        })
      
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Unable to delete user",
            error:error.message
        })
    }
}