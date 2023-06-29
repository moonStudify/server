const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');
const checkJwt = require('../middlewares/checkJwt');

// ADD COMMENT
router.post('/add', checkJwt, commentController.AddComment);

// GET ALL COMMENTS
router.get('/', checkJwt, commentController.GetAllComments);

// GET COMMENT BY ID
router.get('/:id', checkJwt, commentController.GetCommentById);

// UPDATE COMMENT BY ID
router.put('/:id', checkJwt, commentController.UpdateCommentById);

// DELETE COMMENT BY ID
router.delete('/:id', checkJwt, commentController.DeleteCommentById);

module.exports = router;
