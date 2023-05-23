const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const TestSchema = new Schema({
  classCode: { type: String, required: true },
  description: { type: String },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  classId: { type: String, required: true },
  url: { type: String },
  questions: [{ type: Schema.Types.ObjectId, required: true }],
  maxPoint: { type: Number, required: true },
  bannerUrl: { type: String },
});

module.exports = mongoose.model(COLLECTION.TEST, TestSchema);
