const express = require('express');
const router = express.Router();
const User = require('../models/user');

// ADD USER
router.post('/add', (req, res) => {
  const newUser = new User({
    userId: req.body.userId,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    classes: req.body.classes,
    avatarUrl: req.body.avatarUrl,
    status: req.body.status,
    fullname: req.body.fullname,
    dob: req.body.dob,
    createDate: req.body.createDate,
    updateDate: req.body.updateDate,
  });

  newUser
    .save()
    .then(() => res.json('User Added...'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// GET ALL USERS
router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// GET USER BY ID
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// UPDATE USER BY ID
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// DELETE USER BY ID
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
