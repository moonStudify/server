const express = require('express');
const router = express.Router();
const testController = require('../controllers/test.controller');
const checkJwt = require('../middlewares/checkJwt');

// ADD TEST
router.post('/add', checkJwt, testController.AddTest);

// GET ALL TESTS
router.get('/', checkJwt, testController.GetAllTests);

// GET TEST BY ID
router.get('/:id', checkJwt, testController.GetTestById);

// UPDATE TEST BY ID
router.put('/:id', checkJwt, testController.UpdateTestById);

// DELETE TEST BY ID
router.delete('/:id', checkJwt, testController.DeleteTestById);

module.exports = router;
