const postModel=require('../models/postSchema');
const commentModel =require('../models/commentSchema')

exports.addComment=async(req,res)=>{
    try{
    const {post,user,body}=req.body;
    const recentComment=await commentModel.create({post,user,body});
    const updatePost=postModel.findByIdAndUpdate(post,{$push:{comments:recentComment._id}},{new:true})
                            .populate("comments")
                        .exec();
    //populate means getting the document/post related to that id
    res.status(200).json({
        success:true,
        message:"Comment added successfully"

    })
    }catch(error){
        console.log("ERROR IN comment controller "+error)
        res.status(500).json({
            success:false,
            message:"Error in adding comment ",
            
        })
    
    }
}