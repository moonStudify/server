const express = require('express');
const router = express.Router();
const takeTestController = require('../controllers/takeTest.controller');

// ADD TAKE TEST
router.post('/add', takeTestController.AddTakeTest);

// GET ALL TAKE TESTS
router.get('/', takeTestController.GetAllTakeTests);

// GET TAKE TEST BY ID
router.get('/:id', takeTestController.GetTakeTestById);

// UPDATE TAKE TEST BY ID
router.put('/:id', takeTestController.UpdateTakeTestById);

// DELETE TAKE TEST BY ID
router.delete('/:id', takeTestController.DeleteTakeTestById);

module.exports = router;
