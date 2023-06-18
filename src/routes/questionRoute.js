const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controller');

// ADD QUESTION
router.post('/add', questionController.AddQuestion);

// GET ALL QUESTIONS
router.get('/', questionController.GetAllQuestions);

// GET QUESTION BY ID
router.get('/:id', questionController.GetQuestionById);

// UPDATE QUESTION BY ID
router.put('/:id', questionController.UpdateQuestionById);

// DELETE QUESTION BY ID
router.delete('/:id', questionController.DeleteQuestionById);

module.exports = router;
