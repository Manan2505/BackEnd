const model=require('../models/schema');
exports.deleteTask=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteTask=await model.findByIdAndDelete({_id:id});
        res.status(200).json({
            success:true,
            message:"Task deleted successfully",
            // task:update
            
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong in deleteTask controller"
        })

    }
}