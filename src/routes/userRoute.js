const express = require('express');
const router = express.Router();
const User = require('../models/user');
const userController = require('../controllers/user.controller');

// ADD USER
router.post('/add', userController.AddUser);

// GET ALL USERS
router.get('/', userController.GetAllUsers);

// GET USER BY ID
router.get('/:id', userController.GetUserById);

// UPDATE USER BY ID
router.put('/:id', userController.UpdateUserById);

// DELETE USER BY ID
router.delete('/:id', userController.DeleteUserById);

module.exports = router;
