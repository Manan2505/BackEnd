const express=require('express'); // importing express framework
const app=express(); // instantiate express
const dbConnect=require('./database/database')
const routes=require('./routes/routes');
// const dotenv=require('dotenv');
require('dotenv').config();
app.use(express.json()); // To parse/fetch data from request body
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running at port no. ${PORT}`)
});

// database connectivity
dbConnect();

// using routes
app.use(routes);

