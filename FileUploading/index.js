const express=require('express');
const app=express();
app.use(express.json()); //middleware to parse data from req.body
require('dotenv').config();
// express-fileupload middleware for storing data locally
const fileUpload = require('express-fileupload');

app.use(fileUpload({
    useTempFiles: true,   // This enables temporary files
    tempFileDir: '/tmp/'  // Path for temporary files (optional, only if you want to set a specific path)
}));

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running at port no. ${PORT}`);
})
//dummy route
app.get('/dummy',(req,res)=>{
    res.send("Welcome to dummy route")
})
//routes connection
const routes=require('./routes/route');
app.use(routes);

//db connection
const dbConnect=require('./config/database');
dbConnect();

//cloudinary connection
const cloudConnect = require('./config/cloudinary');
cloudConnect();
