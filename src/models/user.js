const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION, ROLES, STATUS } = require('../utils/enum');

const UserSchema = new Schema({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, default: '' },
  role: { type: String, default: ROLES.USER, required: true },
  classes: { type: [String], default: [] },
  avatarUrl: { type: String, default: ''},
  status: { type: String, default:STATUS.OK, required: true },
  fullname: { type: String, default: '' },
  dob: { type: Date, default: null },
  createDate: { type: Date, default: Date.now },
  updateDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model(COLLECTION.USER, UserSchema);
