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
    // Check if student already joined class
    ClassStudent.findOne({classId: req.body.classId, studentId: req.body.studentId})
        .then(classStudent => {
            if (classStudent) {
                return res.status(400).json({
                    errorMessage: 'Student already joined class',
                    data: classStudent._doc,
                });
            }
            else {
                // Create new class student
                const newClassStudent = new ClassStudent({
                    classId: req.body.classId,
                    studentId: req.body.studentId,
                    status: CLASS_STUDENT_STATUS.JOINED,
                });

                newClassStudent
                    .save()
                    .then((classStudent) => res.json(classStudent))
                    .catch((err) => res.status(400).json('Error: ' + err));
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

// UPDATE STUDENT STATUS IN CLASS
const UpdateStudentStatusInClass = async (req, res) => {
    ClassStudent.findOneAndUpdate({ classId: req.params.classId, studentId: req.params.studentId }, { status: req.params.status }, { new: true })
        .then((classStudent) => res.json(classStudent))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// GET ALL CLASSES BY USER ID
const GetAllClassesByStudentId = async (req, res) => {
    // get all class student by user id and populate class
    ClassStudent.find({ studentId: req.params.id }).populate('classId')
        .then((classStudents) => res.json(classStudents))
        .catch((err) => res.status(400).json('Error: ' + err));
}

module.exports = {
    GetAllStudentsInClass,
    FilterStudentsInClassByStatus,
    JoinClass,
    UpdateStudentStatusInClass,
    GetAllClassesByStudentId,
}