const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const NewFeedSchema = new Schema({
  comments: { type: [String] },
  content: { type: String },
  classId: {
    type: Schema.Types.ObjectId,
    ref: COLLECTION.CLASS,
    required: true,
  },
  attachmentLink: { type: String },
  newFeedUrl: { type: String, default: '' },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: COLLECTION.USER,
    required: true,
  },
});

module.exports = mongoose.model(COLLECTION.NEW_FEED, NewFeedSchema);
