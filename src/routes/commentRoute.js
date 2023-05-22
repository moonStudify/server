const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// ADD COMMENT
router.post('/add', (req, res) => {
  const newComment = new Comment({
    commentId: req.body.commentId,
    newFeedId: req.body.newFeedId,
    content: req.body.content,
    dateCreate: req.body.dateCreate,
  });

  newComment
    .save()
    .then(() => res.json('Comment Added...'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// GET ALL COMMENTS
router.get('/', (req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// GET COMMENT BY ID
router.get('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// UPDATE COMMENT BY ID
router.put('/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// DELETE COMMENT BY ID
router.delete('/:id', (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
