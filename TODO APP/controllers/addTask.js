const model=require('../models/schema');
exports.addTask=async(req,res)=>{
    try{
        const {task,desc}=req.body;
        const update=await model.create({task,desc});
        res.status(200).json({
            success:true,
            message:"Task added successfully",
            // task:update
            
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong in addTask controller"
        })

    }
}