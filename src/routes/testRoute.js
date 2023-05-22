const express = require('express');
const router = express.Router();
const Test = require('../models/test');

// ADD TEST
router.post('/add', (req, res) => {
  const newTest = new Test({
    testId: req.body.testId,
    classCode: req.body.classCode,
    description: req.body.description,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    classId: req.body.classId,
    url: req.body.url,
    questions: req.body.questions,
    questionOrders: req.body.questionOrders,
    maxPoint: req.body.maxPoint,
    bannerUrl: req.body.bannerUrl,
  });

  newTest
    .save()
    .then(() => res.json('Test Added...'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// GET ALL TESTS
router.get('/', (req, res) => {
  Test.find()
    .then((tests) => res.json(tests))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// GET TEST BY ID
router.get('/:id', (req, res) => {
  Test.findById(req.params.id)
    .then((test) => res.json(test))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// UPDATE TEST BY ID
router.put('/:id', (req, res) => {
  Test.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((test) => res.json(test))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// DELETE TEST BY ID
router.delete('/:id', (req, res) => {
  Test.findByIdAndDelete(req.params.id)
    .then(() => res.json('Test deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
