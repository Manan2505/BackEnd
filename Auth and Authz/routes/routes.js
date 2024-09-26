const express=require('express');
const router=express.Router();

const {signup}=require('../controllers/signup');
const {deleteUser}=require('../controllers/deleteUser');
const {login}=require('../controllers/login');

router.post('/signup',signup);
router.post('/deleteUser',deleteUser);
router.post('/login',login)

module.exports=router;