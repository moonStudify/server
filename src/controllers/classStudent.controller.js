const ClassStudent = require('../models/classStudent');
const { CLASS_STUDENT_STATUS } = require('../shared/constants');

// GET ALL STUDENTS IN CLASS
const GetAllStudentsInClass = async (req, res) => {
    ClassStudent.find({ classId: req.params.id })
        .then((classStudents) => res.json(classStudents))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// FILTER STUDENTS IN CLASS BY STATUS
const FilterStudentsInClassByStatus = async (req, res) => {
    console.log(req.params.id);
    ClassStudent.find({ classId: req.params.id, status: req.params.status })
        .then((classStudents) => res.json(classStudents))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// JOIN CLASS
const JoinClass = async (req, res) => {
    const newClassStudent = new ClassStudent({
        classId: req.body.classId,
        userId: req.body.userId,
        status: CLASS_STUDENT_STATUS.ACTIVE,
    });
    newClassStudent
        .save()
        .then(() => res.json('ClassStudent Added...'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// UPDATE STUDENT STATUS IN CLASS
const UpdateStudentStatusInClass = async (req, res) => {
    ClassStudent.findOneAndUpdate({ classId: req.params.classId, userId: req.params.userId }, { status: req.params.status }, { new: true })
        .then((classStudent) => res.json(classStudent))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// GET ALL CLASSES BY USER ID
const GetAllClassesByUserId = async (req, res) => {
    // get all class student by user id and populate class
    ClassStudent.find({ userId: req.params.id }).populate('classId')
        .then((classStudents) => res.json(classStudents))
        .catch((err) => res.status(400).json('Error: ' + err));
}

module.exports = {
    GetAllStudentsInClass,
    FilterStudentsInClassByStatus,
    JoinClass,
    UpdateStudentStatusInClass,
    GetAllClassesByUserId,
}