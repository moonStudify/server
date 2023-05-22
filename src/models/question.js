const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const QuestionSchema = new Schema({
  questionId: { type: String, required: true },
  type: { type: String, required: true },
  content: { type: String },
  answers: { type: [String], required: true },
  correctAnswers: { type: [String], required: true },
  thumbnailUrl: { type: String },
  maxPoint: { type: Number },
});

module.exports = mongoose.model(COLLECTION.QUESTION, QuestionSchema);
