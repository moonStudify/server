const Comment = require('../models/comment');

// GET ALL COMMENTS
const GetAllComments = async (req, res) => {
    Comment.find()
        .then((comments) => res.json(comments))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// GET COMMENT BY ID
const GetCommentById = async (req, res) => {
    Comment.findById(req.params.id)
        .then((comment) => res.json(comment))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// ADD COMMENT
const AddComment = async (req, res) => {
    const newComment = new Comment({
        commentId: req.body.commentId,
        newFeedId: req.body.newFeedId,
        content: req.body.content,
        dateCreate: req.body.dateCreate,
    });

    newComment
        .save()
        .then((comments) => res.json(comments))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// UPDATE COMMENT BY ID
const UpdateCommentById = async (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((comment) => res.json(comment))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// DELETE COMMENT BY ID
const DeleteCommentById = async (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then((comments) => res.json(comments))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

module.exports = {
    GetAllComments,
    GetCommentById,
    AddComment,
    UpdateCommentById,
    DeleteCommentById,
}