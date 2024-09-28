const file=require('../models/File');

exports.localFileUpload=async(req,res)=>{
    try{
        //fetching file using following syntax
        const file=req.files.file;
        console.log(file)
        // defining path for file
        let path=__dirname+"/files/"+Date.now() +`.${file.name.split('.')[1]}`;
        console.log("PATH ",path);
        //moving file
        await file.mv(path,(error)=>{
            if(error!=undefined){
                console.log("Error in moving file "+error)
            }
            
            
        })
        res.json({
            success:true,
            message:"File uploaded on server !!"
        })

    }catch(error){
        console.log("error in localFileUpload "+error.message);
    }
}