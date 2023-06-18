const express = require('express');
const router = express.Router();
const testController = require('../controllers/test.controller');

// ADD TEST
router.post('/add', testController.AddTest);

// GET ALL TESTS
router.get('/', testController.GetAllTests);

// GET TEST BY ID
router.get('/:id', testController.GetTestById);

// UPDATE TEST BY ID
router.put('/:id', testController.UpdateTestById);

// DELETE TEST BY ID
router.delete('/:id', testController.DeleteTestById);

module.exports = router;
