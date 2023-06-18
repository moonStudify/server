const express = require('express');
const router = express.Router();
const classController = require('../controllers/class.controller');

// ADD CLASS
router.post('/add', classController.AddClass);

// GET ALL CLASSES
router.get('/', classController.GetAllClasses);

// GET CLASS BY ID
router.get('/:id', classController.GetClassById);

// UPDATE CLASS BY ID
router.put('/:id', classController.UpdateClassById);

// DELETE CLASS BY ID
router.delete('/:id', classController.DeleteClassById);

module.exports = router;
