const express = require('express');
const router = express.Router();
const takeTestController = require('../controllers/takeTest.controller');
const checkJwt = require('../middlewares/checkJwt');

// ADD TAKE TEST
router.post('/add', checkJwt, takeTestController.AddTakeTest);

// GET ALL TAKE TESTS
router.get('/', checkJwt, takeTestController.GetAllTakeTests);

// GET TAKE TEST BY ID
router.get('/:id', checkJwt, takeTestController.GetTakeTestById);

// UPDATE TAKE TEST BY ID
router.put('/:id', checkJwt, takeTestController.UpdateTakeTestById);

// DELETE TAKE TEST BY ID
router.delete('/:id', checkJwt, takeTestController.DeleteTakeTestById);

module.exports = router;
