const express=require('express');
const router=express.Router();
  
// const {imageUpload,videoUpload,imageReducerUpload,localFileUpload}=require('../controllers/fileUpload')
const {localFileUpload}=require('../controllers/fileUpload')

// router.post('/imageUpload',imageUpload);
// router.post('/imageReducer',imageReducerUpload);
router.post('/localFileUpload',localFileUpload);
// router.post('/videoUpload',videoUpload)
module.exports=router;