const express = require('express');
const router = express.Router();
const User = require('../models/User');


// ADD USER
router.post('/add', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });
  newUser
    .save()
    .then(() => res.json('User Added...'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
