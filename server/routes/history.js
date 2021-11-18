const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController')
const History = require('../models/history')

// Get all
router.get('/', historyController.getHistory, async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  try {
    const history = await History.find();
    res.status(200).json(history);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
// Create one
router.post('/', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  console.log('POST request body: ', req.body)
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
  res.header("Access-Control-Allow-Origin", 'https://localhost:8080');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  console.log('delete router reached')
  await History.deleteMany({});
  res.sendStatus(200);
});


module.exports = router;