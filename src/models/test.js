const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const TestSchema = new Schema({
  testId: { type: String, required: true },
  classCode: { type: String, required: true },
  description: { type: String },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  classId: { type: String, required: true },
  url: { type: String },
  questions: { type: [String], required: true },
  questionOrders: { type: [Number], required: true },
  maxPoint: { type: Number, required: true },
  bannerUrl: { type: String },
});

module.exports = mongoose.model(COLLECTION.TEST, TestSchema);
