const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION } = require('../utils/enum');

const ClassStudentSchema = new Schema({
  classId: { type: Schema.Types.ObjectId, required: true, ref: COLLECTION.CLASS },
  studentId: { type: Schema.Types.ObjectId, required: true, ref: COLLECTION.USER },
  status: { type: String, required: true },
});

module.exports = mongoose.model(COLLECTION.CLASS_STUDENT, ClassStudentSchema);

