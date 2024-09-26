const express=require('express');
const router=express.Router();

const {signup}=require('../controllers/signup');
const {deleteUser}=require('../controllers/deleteUser');
const {login}=require('../controllers/login');
const {auth,isStudent,isAdmin}=require('../middlewares/auth');

router.post('/signup',signup);
router.post('/deleteUser',deleteUser);
router.post('/login',login)

//protected routes
router.get('/isStudent',auth,isStudent,(req,res)=>{
    res.send("Welcome Student")
})
router.get('/isAdmin',auth,isAdmin,(req,res)=>{
    res.send("Welcome Admin")
})

module.exports=router;