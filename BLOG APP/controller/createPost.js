const model=require('../models/postSchema');

exports.createPost=async(req,res)=>{
    try{
    const {title,body}=req.body;
    const update=await model.create({title,body});
    res.status(200).json({
        success:true,
        message:"Post created successfully"

    })
    }catch(error){
        console.log("ERROR IN DBv "+error)
        res.status(500).json({
            success:false,
            message:"Error in creating post ",
            
        })
    
    }
}