const express = require('express');
const router = express.Router();
const NewFeed = require('../models/newFeed');
const newFeedController = require('../controllers/newFeed.controller');

// ADD NEWFEED
router.post('/add', newFeedController.AddNewFeed);

// GET ALL NEWFEEDS
router.get('/', newFeedController.GetAllNewFeeds);

// GET NEWFEED BY ID
router.get('/:id', newFeedController.GetNewFeedById);

// UPDATE NEWFEED BY ID
router.put('/:id', newFeedController.UpdateNewFeedById);

// DELETE NEWFEED BY ID
router.delete('/:id', newFeedController.DeleteNewFeedById);

module.exports = router;
