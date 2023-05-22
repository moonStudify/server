const express = require('express');
const router = express.Router();
const Question = require('../models/question');

// ADD QUESTION
router.post('/add', (req, res) => {
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
});

// GET ALL QUESTIONS
router.get('/', (req, res) => {
  Question.find()
    .then((questions) => res.json(questions))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// GET QUESTION BY ID
router.get('/:id', (req, res) => {
  Question.findById(req.params.id)
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// UPDATE QUESTION BY ID
router.put('/:id', (req, res) => {
  Question.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((question) => res.json(question))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// DELETE QUESTION BY ID
router.delete('/:id', (req, res) => {
  Question.findByIdAndDelete(req.params.id)
    .then(() => res.json('Question deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
