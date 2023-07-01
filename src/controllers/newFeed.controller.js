const NewFeed = require('../models/newFeed');

// GET ALL NEW FEEDS
const GetAllNewFeeds = async (req, res) => {
    NewFeed.find()
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// GET NEW FEED BY ID
const GetNewFeedById = async (req, res) => {
    NewFeed.findById(req.params.id)
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// ADD NEW FEED
const AddNewFeed = async (req, res) => {
    const newNewFeed = new NewFeed({
        newFeedId: req.body.newFeedId,
        comments: req.body.comments,
        content: req.body.content,
        classId: req.body.classId,
        attachmentLink: req.body.attachmentLink,
        dateCreate: req.body.dateCreate,
        newFeedUrl: req.body.newFeedUrl,
        teacherId: req.body.teacherId,
    });

    newNewFeed
        .save()
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// UPDATE NEW FEED BY ID
const UpdateNewFeedById = async (req, res) => {
    NewFeed.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// DELETE NEW FEED BY ID
const DeleteNewFeedById = async (req, res) => {
    NewFeed.findByIdAndDelete(req.params.id)
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

module.exports = {
    GetAllNewFeeds,
    GetNewFeedById,
    AddNewFeed,
    UpdateNewFeedById,
    DeleteNewFeedById,
}