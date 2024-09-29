const nodemailer=require('nodemailer');

const sendMail=async(doc,req,res)=>{
    try{
        let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })
        // send mail
        let info =await transporter.sendMail({
            from:"arora.manan.k1234@gmail.com",
            to:doc.email,
            subject:"File status",
            html:`<h1>Your file is uploaded successfully on cloudinary</h1>
            view here: <a href="${doc.imgUrl}">See image</a>`
        })
        console.log(info);
    }catch(error){
        res.status(500).json({
            message:"error in sending mail",
            error:error.message
        })

    }
    
}

module.exports=sendMail;