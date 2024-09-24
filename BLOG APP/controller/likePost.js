const postModel=require('../models/postSchema');
const likeModel =require('../models/likeSchema')

exports.likePost=async(req,res)=>{
    try{
    const {post,user}=req.body;
    const recentLike=await likeModel.create({post,user});
    const updatedPost= await postModel.findByIdAndUpdate(post,{$push:{likes:recentLike._id}},{new:true})
                            .populate("likes")
                        .exec();
    //populate means getting the document/post related to that id
    res.status(200).json({
        success:true,
        message:"like added successfully",
        post:updatedPost

    })
    }catch(error){
        console.log("ERROR IN comment controller "+error)
        res.status(500).json({
            success:false,
            message:"Error in adding comment ",
            
        })
    
    }
}