const express=require('express');
const router=express.Router();

const {addTask}=require('../controllers/addTask');
const {deleteTask}=require('../controllers/deleteTask');
const {getTask}=require('../controllers/getTask');
const {updateTask}=require('../controllers/updateTask');

router.post('/addTask',addTask);
router.delete('/deleteTask/:id',deleteTask);
router.get('/getTask',getTask)
router.put('/updateTask/:id',updateTask);
module.exports=router;