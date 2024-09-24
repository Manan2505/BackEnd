const postModel=require('../models/postSchema');
const likeModel =require('../models/likeSchema')

exports.unlikePost=async(req,res)=>{
    try{
    const {post,like}=req.body;
    const deletedLike=await likeModel.findByIdAndDelete({post:post,_id:like});
    const updatedPost=await postModel.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true}).populate("likes").exec();
    res.status(200).json({
        success:true,
        message:"Post unliked successfully",
        post:updatedPost
    })
    }catch(error){
        console.log("ERROR IN unlike controller "+error)
        res.status(500).json({
            success:false,
            message:"Error in unlikeing post "+error,
        })
    
    }
}