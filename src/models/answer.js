const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const AnswerSchema = new Schema({
  name: { type: String },
  content: { type: String },
});

module.exports = mongoose.model(COLLECTION.ANSWER, AnswerSchema);
