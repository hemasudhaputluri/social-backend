const express = require('express');
const { 
    createPostController, 
    updatePostController, 
    deletePostController 
} 
= require('../controller/postController/postController.js');

const router = express.Router();




router.post('/createPost', createPostController);
router.put('/updatePost/:id', updatePostController);
router.delete('/deletePost/:id', deletePostController);

module.exports = router;