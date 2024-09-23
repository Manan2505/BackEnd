const model=require('../models/schema');
exports.getTask=async(req,res)=>{
    try{
        const fetch=await model.findById({});
        res.status(200).json({
            success:true,
            message:"You can see your tasks",  
            tasks:fetch
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Something went wrong in getTask controller"
        })

    }
}