const express=require('express');
const app=express();
const dbConnect=require('./config/database');
const routes=require('./routes/routes');
require('dotenv').config();
app.use(express.json());
const PORT=process.env.PORT;
app.listen(PORT,()=>console.log(`server running at port no. ${PORT}`));

//database connectivity
dbConnect();
//default rout
app.get('/',(req,res)=>{
    res.send('this is my home page');
});

//using all routes
app.use(routes);
