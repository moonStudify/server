const express = require('express');
const router = express.Router();
const User = require('../models/user');
const userController = require('../controllers/user.controller');
const checkJwt = require('../middlewares/checkJwt');

// ADD USER
router.post('/add', checkJwt, userController.AddUser);

// GET ALL USERS
router.get('/', checkJwt, userController.GetAllUsers);

// GET USER BY ID
router.get('/:id', checkJwt, userController.GetUserById);

// UPDATE USER BY ID
router.put('/:id', checkJwt, userController.UpdateUserById);

// DELETE USER BY ID
router.delete('/:id', checkJwt, userController.DeleteUserById);

module.exports = router;
