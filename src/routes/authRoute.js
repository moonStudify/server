const express = require('express');
const router = express.Router();
const User = require('../models/user');

//Login with  google api
router.post('/login/google', verifyToken, async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({
        message: 'Access token not found',
      });
    }

    const token = authorization;
    const user = await googleAuth(token);
    const snapshot = await Account.findOne({
      email: user.email,
    });
    if (!snapshot) {
      //New account
      let newAccount = new Account({
        email: user.email,
      });
      newAccount = await newAccount.save();
      let newUser = new User({
        fullName: user.name,
        image: user.picture,
        account: newAccount._id,
      });
      newUser = await newUser.save();
      if (!newUser) {
        return res.status(500).json({
          message: 'Cannot create user',
          success: false,
        });
      } else {
        return res.status(200).json({
          message: 'Create user successfully',
          success: true,
          user: newUser,
          accessToken: token,
        });
      }
    } else {
      if (!snapshot.isHidden) {
        if (snapshot.username === null && snapshot.password === null)
          return res.status(200).json({
            message: 'User login',
            success: true,
            user: snapshot,
            accessToken: req.headers.authorization,
          });
        else {
          return res.status(400).json({
            message: 'This account have used with username and password',
            success: false,
          });
        }
      } else {
        res.status(403).json({
          message: 'Your account is blocked',
          success: false,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
});
