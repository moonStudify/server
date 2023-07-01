const User = require('../models/user');

/** Get all users
 * 
 * @param {*} req 
 * @param {*} res 
 */
const GetAllUsers = async (req, res) => {
    User.find()
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
};

// Get user by id
const GetUserById = async (req, res) => {
    User.findById(req.params.id)
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
};

// Add user
const AddUser = async (req, res) => {
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
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// Update user by id
const UpdateUserById = async (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// Delete user by id
const DeleteUserById = async (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
};

module.exports = {
    GetAllUsers,
    GetUserById,
    AddUser,
    UpdateUserById,
    DeleteUserById
}