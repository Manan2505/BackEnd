const postModel=require('../models/postSchema');
const likeModel =require('../models/likeSchema');
const commentModel=require('../models/commentSchema');

exports.getAllPosts=async(req,res)=>{
    try{
    const getAll=await postModel.find().populate("likes").populate("comments").exec();
    //populate means getting the document/post related to that id
    res.status(200).json({
        success:true,
        message:"Posts fetched successfully",
        posts:getAll

    })
    }catch(error){
        console.log("ERROR IN fetching posts "+error)
        res.status(500).json({
            success:false,
            message:"Error in fetching posts ",
            
        })
    
    }
}