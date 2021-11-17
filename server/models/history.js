const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    default: Date.now,
  },
  wpm_raw: {
    type: Number,
    required: true,
  },
  wpm: {
    type: Number,
    required: true,
  },
  acc: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('History', historySchema)