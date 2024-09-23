const express=require('express');
const router=express.Router();


const {createPost}=require('../controller/createPost');
const {addComment}=require('../controller/addComment');

router.post('/createPost',createPost);
router.post('/addComment',addComment)

module.exports=router;