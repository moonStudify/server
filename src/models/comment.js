const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const CommentSchema = new Schema({
  commentId: { type: String, required: true },
  newFeedId: { type: String, required: true },
  content: { type: String },
  dateCreate: { type: Date, default: Date.now },
});

module.exports = mongoose.model(COLLECTION.COMMENT, CommentSchema);
