const express = require('express');
const router = express.Router();
const NewFeed = require('../models/newFeed');

// ADD NEWFEED
router.post('/add', (req, res) => {
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
});

// GET ALL NEWFEEDS
router.get('/', (req, res) => {
  NewFeed.find()
    .then((newFeeds) => res.json(newFeeds))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// GET NEWFEED BY ID
router.get('/:id', (req, res) => {
  NewFeed.findById(req.params.id)
    .then((newFeed) => res.json(newFeed))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// UPDATE NEWFEED BY ID
router.put('/:id', (req, res) => {
  NewFeed.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((newFeed) => res.json(newFeed))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// DELETE NEWFEED BY ID
router.delete('/:id', (req, res) => {
  NewFeed.findByIdAndDelete(req.params.id)
    .then(() => res.json('NewFeed deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
