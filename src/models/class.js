const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const ClassSchema = new Schema({
  classId: { type: String, required: true },
  classCode: { type: String, required: true },
  description: { type: String },
  newfeeds: { type: [String] },
  users: { type: [String] },
  name: { type: String, required: true },
  tests: { type: [String] },
  teacherId: { type: String, required: true },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
  bannerUrl: { type: String },
});

module.exports = mongoose.model(COLLECTION.CLASS, ClassSchema);
