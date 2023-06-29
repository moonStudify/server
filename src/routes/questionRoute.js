const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question.controller');
const checkJwt = require('../middlewares/checkJwt');

// ADD QUESTION
router.post('/add', checkJwt, questionController.AddQuestion);

// GET ALL QUESTIONS
router.get('/', checkJwt, questionController.GetAllQuestions);

// GET QUESTION BY ID
router.get('/:id', checkJwt, questionController.GetQuestionById);

// UPDATE QUESTION BY ID
router.put('/:id', checkJwt, questionController.UpdateQuestionById);

// DELETE QUESTION BY ID
router.delete('/:id', checkJwt, questionController.DeleteQuestionById);

module.exports = router;
