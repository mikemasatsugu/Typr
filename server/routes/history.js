const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController')
const History = require('../models/history')

// Get all
router.get('/', historyController.getHistory, async (req, res) => {
  try {
    const history = await History.find();
    res.status(200).json(history);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
// Create one
router.post('/', async (req, res) => {
  console.log(req.body)
  const data = new History({
    date: req.body.date,
    wpm_raw: +req.body.wpm_raw,
    wpm: +req.body.wpm,
    acc: +req.body.acc,
  });

  try {
    const newHistory = await data.save();
    res.status(201).json(newHistory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  };
});


// Delete all
router.delete('/', async (req, res) => {
  const results = await History.deleteMany({});
  res.sendStatus(200);
});


module.exports = router;