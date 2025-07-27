const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  price: {
    type: Number,
    default: 0,
  },
  instructor: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
