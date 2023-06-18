const Question = require('../models/question');

// GET ALL QUESTIONS
const GetAllQuestions = async (req, res) => {
    Question.find()
        .then((questions) => res.json(questions))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// GET QUESTION BY ID
const GetQuestionById = async (req, res) => {
    Question.findById(req.params.id)
        .then((question) => res.json(question))
        .catch((err) => res.status(400).json('Error: ' + err));
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
        .then(() => res.json('Question Added...'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// UPDATE QUESTION BY ID
const UpdateQuestionById = async (req, res) => {
    Question.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((question) => res.json(question))
        .catch((err) => res.status(400).json('Error: ' + err));
}

// DELETE QUESTION BY ID
const DeleteQuestionById = async (req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json('Question deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

module.exports = {
    GetAllQuestions,
    GetQuestionById,
    AddQuestion,
    UpdateQuestionById,
    DeleteQuestionById,
}