const TakeTest = require('../models/takeTest');

// GET ALL TAKE TESTS
const GetAllTakeTests = async (req, res) => {
    TakeTest.find()
        .then((takeTests) => res.json(takeTests))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// GET TAKE TEST BY ID
const GetTakeTestById = async (req, res) => {
    TakeTest.findById(req.params.id)
        .then((takeTest) => res.json(takeTest))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// ADD TAKE TEST
const AddTakeTest = async (req, res) => {
    const newTakeTest = new TakeTest({
        takeTestId: req.body.takeTestId,
        testId: req.body.testId,
        userId: req.body.userId,
        submitTime: req.body.submitTime,
        point: req.body.point,
        questions: req.body.questions,
        chosenAnswer: req.body.chosenAnswer,
        dateSubmit: req.body.dateSubmit,
    });

    newTakeTest
        .save()
        .then(() => res.json('TakeTest Added...'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// UPDATE TAKE TEST BY ID
const UpdateTakeTestById = async (req, res) => {
    TakeTest.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((takeTest) => res.json(takeTest))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// DELETE TAKE TEST BY ID
const DeleteTakeTestById = async (req, res) => {
    TakeTest.findByIdAndDelete(req.params.id)
        .then(() => res.json('TakeTest deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

module.exports = {
    GetAllTakeTests,
    GetTakeTestById,
    AddTakeTest,
    UpdateTakeTestById,
    DeleteTakeTestById,
}