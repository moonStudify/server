const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const CommentSchema = new Schema({
  newFeedId: { type: String, required: true },
  content: { type: String },
});

module.exports = mongoose.model(COLLECTION.COMMENT, CommentSchema);
