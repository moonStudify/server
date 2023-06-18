const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

const verifyToken = require('../middlewares/requireAuth');

//Login with  google api
router.post('/login/google', verifyToken, authController.LoginWithGoogle);

module.exports = router;