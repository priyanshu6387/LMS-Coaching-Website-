const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  item: String,
  price: Number,
  date: Date
});

module.exports = mongoose.model('Sale', saleSchema);
