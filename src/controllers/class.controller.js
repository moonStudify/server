const Class = require('../models/class');

// GET ALL CLASSES
const GetAllClasses = async (req, res) => {
    Class.find()
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// GET CLASS BY ID
const GetClassById = async (req, res) => {
    Class.findById(req.params.id)
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// GET CLASS BY TEACHER ID
const GetClassByTeacherId = async (req, res) => {
    Class.find({ teacherId: req.params.id })
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// ADD CLASS
const AddClass = async (req, res) => {
    const newClass = new Class({
        classId: req.body.classId,
        classCode: req.body.classCode,
        description: req.body.description,
        newfeeds: req.body.newfeeds,
        users: req.body.users,
        name: req.body.name,
        tests: req.body.tests,
        teacherId: req.body.teacherId,
        dateCreate: req.body.dateCreate,
        dateUpdate: req.body.dateUpdate,
        bannerUrl: req.body.bannerUrl,
    });

    newClass
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

// UPDATE CLASS BY ID
const UpdateClassById = async (req, res) => {
    Class.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// DELETE CLASS BY ID
const DeleteClassById = async (req, res) => {
    Class.findByIdAndDelete(req.params.id)
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

module.exports = {
    GetAllClasses,
    GetClassById,
    GetClassByTeacherId,
    AddClass,
    UpdateClassById,
    DeleteClassById,
}