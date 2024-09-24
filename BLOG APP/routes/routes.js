const express=require('express');
const router=express.Router();


const {createPost}=require('../controller/createPost');
const {addComment}=require('../controller/addComment');
const {likePost}=require('../controller/likePost');
const {unlikePost}=require('../controller/unlikePost');
const {getAllPosts}=require('../controller/getAllPosts');
router.post('/createPost',createPost);
router.post('/addComment',addComment);
router.post('/likePost',likePost);
router.post('/unlikePost',unlikePost);
router.get('/getAllPosts',getAllPosts);

module.exports=router;