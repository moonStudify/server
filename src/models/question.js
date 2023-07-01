const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const AnswerSchema = new Schema({
  name: { type: String },
  content: { type: String },
});

const QuestionSchema = new Schema({
  type: { type: String, required: true },
  content: { type: String },
  answers: [{ type: AnswerSchema, required: true }],
  correctAnswers: { type: String, required: false, },
  thumbnailUrl: { type: String },
  maxPoint: { type: Number },
});

module.exports = mongoose.model(COLLECTION.QUESTION, QuestionSchema);
