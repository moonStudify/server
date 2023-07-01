const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');
const { CLASS_STATUS } = require('../shared/constants');

const ClassSchema = new Schema({
  classCode: { type: String, required: true },
  description: { type: String },
  newfeeds: [{ type: Schema.Types.ObjectId, ref: COLLECTION.NEW_FEED }],
  users: [{ type: Schema.Types.ObjectId, ref: COLLECTION.USER, default: [] }],
  name: { type: String, required: true },
  tests: [{ type: Schema.Types.ObjectId, ref: COLLECTION.TEST, default: [] }],
  teacherId: { type: Schema.Types.ObjectId, required: true },
  bannerUrl: { type: String },
  status: { type: String, default: CLASS_STATUS.ACTIVE },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model(COLLECTION.CLASS, ClassSchema);

