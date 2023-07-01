const Question = require('../models/question');

// GET ALL QUESTIONS
const GetAllQuestions = async (req, res) => {
    Question.find()
        .then((questions) => res.json(questions))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// GET QUESTION BY ID
const GetQuestionById = async (req, res) => {
    Question.findById(req.params.id)
        .then((question) => res.json(question))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// ADD QUESTION
const AddQuestion = async (req, res) => {
    const newQuestion = new Question({
        questionId: req.body.questionId,
        type: req.body.type,
        content: req.body.content,
        answers: req.body.answers,
        correctAnswers: req.body.correctAnswers,
        thumbnailUrl: req.body.thumbnailUrl,
        maxPoint: req.body.maxPoint,
    });

    newQuestion
        .save()
        .then((questions) => res.json(questions))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// UPDATE QUESTION BY ID
const UpdateQuestionById = async (req, res) => {
    Question.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((question) => res.json(question))
        .catch((err) => res.status(500).json({
            success: false,
            message: err,
        }));
}

// DELETE QUESTION BY ID
const DeleteQuestionById = async (req, res) => {
    Question.findByIdAndDelete(req.params.id)
    .then((questions) => res.json(questions))
    .catch((err) => res.status(500).json({
        success: false,
        message: err,
    }));
}

module.exports = {
    GetAllQuestions,
    GetQuestionById,
    AddQuestion,
    UpdateQuestionById,
    DeleteQuestionById,
}