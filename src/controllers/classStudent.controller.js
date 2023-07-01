const ClassStudent = require('../models/classStudent');
const { CLASS_STUDENT_STATUS } = require('../shared/constants');

// GET ALL STUDENTS IN CLASS
const GetAllStudentsInClass = async (req, res) => {
    ClassStudent.find({ classId: req.params.id })
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// FILTER STUDENTS IN CLASS BY STATUS
const FilterStudentsInClassByStatus = async (req, res) => {
    console.log(req.params.id);
    ClassStudent.find({ classId: req.params.id, status: req.params.status })
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// JOIN CLASS
const JoinClass = async (req, res) => {
    // Check if student already joined class
    ClassStudent.findOne({ classId: req.body.classId, studentId: req.body.studentId })
        .then(classStudent => {
            if (classStudent) {
                return res.status(400).json({
                    errorMessage: 'Already joined class',
                    data: classStudent._doc,
                });
            }
            else {
                // Create new class student
                const newClassStudent = new ClassStudent({
                    classId: req.body.classId,
                    studentId: req.body.studentId,
                    status: CLASS_STUDENT_STATUS.ACTIVE,
                });

                newClassStudent
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
        })
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// UPDATE STUDENT STATUS IN CLASS
const UpdateStudentStatusInClass = async (req, res) => {
    ClassStudent.findOneAndUpdate(
        { classId: req.params.classId, studentId: req.params.studentId },
        { status: req.params.status },
        { new: true })
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// GET ALL CLASSES BY USER ID
const GetAllClassesByStudentId = async (req, res) => {
    // get all class student by user id and populate class
    ClassStudent.find({ studentId: req.params.id }).populate('classId')
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
    GetAllStudentsInClass,
    FilterStudentsInClassByStatus,
    JoinClass,
    UpdateStudentStatusInClass,
    GetAllClassesByStudentId,
}