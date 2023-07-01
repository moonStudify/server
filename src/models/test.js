const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');
const { TEST_STATUS } = require('../shared/constants');

const TestSchema = new Schema({
  classId: { type: Schema.Types.ObjectId, required: true },
  classCode: { type: String, required: true },
  description: { type: String },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  url: { type: String },
  questions: [{ type: Schema.Types.ObjectId, required: false }],
  questionOrders: [{ type: Schema.Types.ObjectId, required: false }],
  maxPoint: { type: Number, required: true },
  bannerUrl: { type: String },
  status: { type: String, default: TEST_STATUS.ACTIVE },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model(COLLECTION.TEST, TestSchema);
