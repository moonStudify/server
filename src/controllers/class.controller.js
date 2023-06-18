const Class = require('../models/class');

// GET ALL CLASSES
const GetAllClasses = async (req, res) => {
    Class.find()
        .then((classes) => res.json(classes))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// GET CLASS BY ID
const GetClassById = async (req, res) => {
    Class.findById(req.params.id)
        .then((cls) => res.json(cls))
        .catch((err) => res.status(400).json('Error: ' + err));
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
        .then(() => res.json('Class Added...'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// UPDATE CLASS BY ID
const UpdateClassById = async (req, res) => {
    Class.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((cls) => res.json(cls))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// DELETE CLASS BY ID
const DeleteClassById = async (req, res) => {
    Class.findByIdAndDelete(req.params.id)
        .then(() => res.json('Class deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

module.exports = {
    GetAllClasses,
    GetClassById,
    AddClass,
    UpdateClassById,
    DeleteClassById,
}