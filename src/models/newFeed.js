const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const NewFeedSchema = new Schema({
  newFeedId: { type: String, required: true },
  comments: { type: [String] },
  content: { type: String },
  classId: { type: String, required: true },
  attachmentLink: { type: String },
  dateCreate: { type: Date, default: Date.now },
  newFeedUrl: { type: String },
  teacherId: { type: String, required: true },
});

module.exports = mongoose.model(COLLECTION.NEW_FEED, NewFeedSchema);
