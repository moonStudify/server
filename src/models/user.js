const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { COLLECTION, ROLES, STATUS } = require('../utils/enum');

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, default: '' },
  role: { type: String, default: ROLES.USER, required: true },
  classes: [
    { type: Schema.Types.ObjectId, default: null, ref: COLLECTION.CLASS },
  ],
  avatarUrl: { type: String, default: '' },
  status: { type: String, default: STATUS.OK, required: true },
  fullname: { type: String, default: '' },
  dob: { type: Date, default: null },
});

module.exports = mongoose.model(COLLECTION.USER, UserSchema);
