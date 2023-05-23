const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const TakeTestSchema = new Schema({
  testId: { type: String, required: true },
  userId: { type: String, required: true },
  submitTime: { type: Date },
  point: { type: Number },
  questions: [
    { type: Schema.Types.ObjectId, required: true, ref: COLLECTION.QUESTION },
  ],
  chosenAnswer: { type: [String] },
  dateSubmit: { type: Date },
});

module.exports = mongoose.model(COLLECTION.TAKE_TEST, TakeTestSchema);
