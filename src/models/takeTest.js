const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const TakeTestSchema = new Schema({
  takeTestId: { type: String, required: true },
  testId: { type: String, required: true },
  userId: { type: String, required: true },
  submitTime: { type: Date },
  point: { type: Number },
  questions: { type: [String] },
  chosenAnswer: { type: [String] },
  dateSubmit: { type: Date },
});

module.exports = mongoose.model(COLLECTION.TAKE_TEST, TakeTestSchema);
