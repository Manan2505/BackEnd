const model=require('../models/schema');
exports.updateTask=async(req,res)=>{
    try{
        const {id}=req.params;
        const {task,desc}=req.body;
        const update=await model.findByIdAndUpdate({_id:id},{task,desc});
        res.status(200).json({
            success:true,
            message:"Task updated successfully",
            // task:update
        })
            
        }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong in updateTask controller"
        })

    }
}
