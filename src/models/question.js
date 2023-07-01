const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const QuestionSchema = new Schema({
  type: { type: String, required: true },
  content: { type: String },
  answers: [
    { type: Schema.Types.ObjectId, ref: COLLECTION.ANSWER, required: true },
  ],
  correctAnswers: {
    type: Schema.Types.ObjectId,
    ref: COLLECTION.ANSWER,
    required: true,
  },
  thumbnailUrl: { type: String },
  maxPoint: { type: Number },
});

module.exports = mongoose.model(COLLECTION.QUESTION, QuestionSchema);
