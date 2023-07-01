const Test = require('../models/test');

// GET ALL TESTS
const GetAllTests = async (req, res) => {
    Test.find()
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// GET TEST BY ID
const GetTestById = async (req, res) => {
    Test.findById(req.params.id)
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// ADD TEST
const AddTest = async (req, res) => {
    const newTest = new Test({
        testId: req.body.testId,
        classCode: req.body.classCode,
        description: req.body.description,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        classId: req.body.classId,
        url: req.body.url,
        questions: req.body.questions,
        questionOrders: req.body.questionOrders,
        maxPoint: req.body.maxPoint,
        bannerUrl: req.body.bannerUrl,
    });

    newTest
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

// UPDATE TEST BY ID
const UpdateTestById = async (req, res) => {
    Test.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.json({
            success: true,
            data: data,
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// DELETE TEST BY ID
const DeleteTestById = async (req, res) => {
    Test.findByIdAndDelete(req.params.id)
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
    GetAllTests,
    GetTestById,
    AddTest,
    UpdateTestById,
    DeleteTestById,
}