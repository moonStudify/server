const express = require('express');
const router = express.Router();
const NewFeed = require('../models/newFeed');
const newFeedController = require('../controllers/newFeed.controller');
const checkJwt = require('../middlewares/checkJwt');

// ADD NEWFEED
router.post('/add', checkJwt, newFeedController.AddNewFeed);

// GET ALL NEWFEEDS
router.get('/', checkJwt, newFeedController.GetAllNewFeeds);

// GET NEWFEED BY ID
router.get('/:id', checkJwt, newFeedController.GetNewFeedById);

// UPDATE NEWFEED BY ID
router.put('/:id', checkJwt, newFeedController.UpdateNewFeedById);

// DELETE NEWFEED BY ID
router.delete('/:id', checkJwt, newFeedController.DeleteNewFeedById);

module.exports = router;
