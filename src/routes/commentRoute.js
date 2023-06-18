const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

// ADD COMMENT
router.post('/add', commentController.AddComment);

// GET ALL COMMENTS
router.get('/', commentController.GetAllComments);

// GET COMMENT BY ID
router.get('/:id', commentController.GetCommentById);

// UPDATE COMMENT BY ID
router.put('/:id', commentController.UpdateCommentById);

// DELETE COMMENT BY ID
router.delete('/:id', commentController.DeleteCommentById);

module.exports = router;
