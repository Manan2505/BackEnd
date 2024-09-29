const fileSchema=require('../models/File');
const cloudinary=require('cloudinary').v2;
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

//image uploading to cloudinary
function isFileTypeSupported(currentFileType,supportedTypes){
    return supportedTypes.includes(currentFileType);
}
async function uploadToCloudinary(file, folder) {
    const options = { folder };
    options.resource_type="auto";
    console.log("Temp file path for upload:", file.tempFilePath);

    // Call Cloudinary's upload API
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}
exports.imageUpload=async(req,res)=>{
    try{
        //fetch data from req body
        const {name,tags,email}=req.body;
        // console.log(name,tags,email);
        const file=req.files.image;
        //validate file type
        const supportedTypes=["jpg","jpeg","png"];
        const currentFileType=file.name.split('.')[1].toLowerCase();
        if(!isFileTypeSupported(currentFileType,supportedTypes)){
            return res.status(400).json({
                message:"File type not supported"
            })
        }
        // if file type supported->upload to cloudinary
        const response=await uploadToCloudinary(file,"fileUploading");
        console.log(response);
        

        //save entry in database
        const entry=await fileSchema.create({name,tags,email,imgUrl:response.secure_url})
        res.status(200).json({
            success:true,
            message:"Image uploaded successfully"
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"SOmething went wrong",
            error:error.message
        })

    }
}

exports.videoUpload=async(req,res)=>{
    try{
        //fetch data from req body
        const {name,tags,email}=req.body;
        // console.log(name,tags,email);
        const file=req.files.image;
        //validate file type
        const supportedTypes=["mp4","mov"];
        const currentFileType=file.name.split('.')[1].toLowerCase();
        if(!isFileTypeSupported(currentFileType,supportedTypes)){
            return res.status(400).json({
                message:"File type not supported"
            })
        }
        // if file type supported->upload to cloudinary
        const response=await uploadToCloudinary(file,"fileUploading");
        console.log(response);
        

        //save entry in database
        // const entry=await fileSchema.create({name,tags,email,imgUrl:response.secure_url})
        res.status(200).json({
            success:true,
            message:"Video uploaded successfully"
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"SOmething went wrong",
            error:error.message
        })

    }
}

function isFileTypeSupported(currentFileType,supportedTypes){
    return supportedTypes.includes(currentFileType);
}
async function uploadToCloudinary(file, folder,quality) {
    const options = { folder };
    options.resource_type="auto";
    options.quality=quality
    console.log("Temp file path for upload:", file.tempFilePath);

    // Call Cloudinary's upload API
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


exports.imageReducerUpload=async(req,res)=>{
    try{
        //fetch data from req body
        const {name,tags,email}=req.body;
        // console.log(name,tags,email);
        const file=req.files.image;
        //validate file type
        const supportedTypes=["jpg","jpeg","png"];
        const currentFileType=file.name.split('.')[1].toLowerCase();
        if(!isFileTypeSupported(currentFileType,supportedTypes)){
            return res.status(400).json({
                message:"File type not supported"
            })
        }
        // if file type supported->upload to cloudinary
        const response=await uploadToCloudinary(file,"fileUploading",50);
        console.log(response);
        

        //save entry in database
        const entry=await fileSchema.create({name,tags,email,imgUrl:response.secure_url})
        res.status(200).json({
            success:true,
            message:"Image Reduced successfully"
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:"SOmething went wrong",
            error:error.message
        })

    }
}