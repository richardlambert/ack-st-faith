const mongoose = require('mongoose');

const sermonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  preacher: {
    type: String,
    required: true,
  },
  sermon: {
    type: String,
    required: true,
  },
});

const Sermon = mongoose.model('sermon', sermonSchema);

module.exports = Sermon;
