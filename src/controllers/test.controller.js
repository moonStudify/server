const Test = require('../models/test');

// GET ALL TESTS
const GetAllTests = async (req, res) => {
    Test.find()
        .then((tests) => res.json(tests))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// GET TEST BY ID
const GetTestById = async (req, res) => {
    Test.findById(req.params.id)
        .then((test) => res.json(test))
        .catch((err) => res.status(400).json('Error: ' + err));
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
        .then(() => res.json('Test Added...'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// UPDATE TEST BY ID
const UpdateTestById = async (req, res) => {
    Test.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((test) => res.json(test))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// DELETE TEST BY ID
const DeleteTestById = async (req, res) => {
    Test.findByIdAndDelete(req.params.id)
        .then(() => res.json('Test deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

module.exports = {
    GetAllTests,
    GetTestById,
    AddTest,
    UpdateTestById,
    DeleteTestById,
}