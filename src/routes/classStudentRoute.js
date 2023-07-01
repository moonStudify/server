const express = require('express');
const router = express.Router();
const classStudentController = require('../controllers/classStudent.controller');
const checkJwt = require('../middlewares/checkJwt');

// GET ALL STUDENTS IN CLASS
router.get('/:id', checkJwt, classStudentController.GetAllStudentsInClass);

// FILTER STUDENTS IN CLASS BY STATUS
router.get('/:id/:status', checkJwt, classStudentController.FilterStudentsInClassByStatus);

// JOIN CLASS
router.post('/join', checkJwt, classStudentController.JoinClass);

module.exports = router;
