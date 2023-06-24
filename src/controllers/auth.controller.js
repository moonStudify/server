require('dotenv').config();
var axios = require("axios").default;
const User = require('../models/user');

const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
const client_id = process.env.AUTH0_CLIENT_ID;
const client_secret = process.env.AUTH0_CLIENT_SECRET;
const audience = process.env.AUTH0_AUDIENCE;

// GET ALL AUTHS
const LoginWithGoogle = async (req, res, next) => {
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
}

const GetAccessToken = async (req, res, next) => {
    var options = {
        headers: { 'content-type': 'application/json' },
    };
    const url = `${issuerBaseUrl}/oauth/token`;
    const body = {
        grant_type: 'client_credentials',
        client_id: client_id,
        client_secret: client_secret,
        audience: audience
    }

    axios.post(url, body, options).then(function (response) {
        return res.status(200).json({
            message: 'Get access token successfully',
            success: true,
            data: response.data,
        });
    }).catch(function (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error',
            success: false,
        });
    });
};

module.exports = {
    LoginWithGoogle,
    GetAccessToken
}