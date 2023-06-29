const express = require('express');
const router = express.Router();
const classController = require('../controllers/class.controller');
const checkJwt = require('../middlewares/checkJwt');

// ADD CLASS
router.post('/add', checkJwt, classController.AddClass);

// GET ALL CLASSES
router.get('/', checkJwt, classController.GetAllClasses);

// GET CLASS BY ID
router.get('/:id', checkJwt, classController.GetClassById);

// UPDATE CLASS BY ID
router.put('/:id', checkJwt, classController.UpdateClassById);

// DELETE CLASS BY ID
router.delete('/:id', checkJwt, classController.DeleteClassById);

module.exports = router;
