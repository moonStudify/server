const NewFeed = require('../models/newFeed');

// GET ALL NEW FEEDS
const GetAllNewFeeds = async (req, res) => {
    NewFeed.find()
        .then((newFeeds) => res.json(newFeeds))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// GET NEW FEED BY ID
const GetNewFeedById = async (req, res) => {
    NewFeed.findById(req.params.id)
        .then((newFeed) => res.json(newFeed))
        .catch((err) => res.status(400).json('Error: ' + err));
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
        .then(() => res.json('NewFeed Added...'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// UPDATE NEW FEED BY ID
const UpdateNewFeedById = async (req, res) => {
    NewFeed.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((newFeed) => res.json(newFeed))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// DELETE NEW FEED BY ID
const DeleteNewFeedById = async (req, res) => {
    NewFeed.findByIdAndDelete(req.params.id)
        .then(() => res.json('NewFeed deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

module.exports = {
    GetAllNewFeeds,
    GetNewFeedById,
    AddNewFeed,
    UpdateNewFeedById,
    DeleteNewFeedById,
}