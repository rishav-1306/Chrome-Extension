const mongoose = require('mongoose');

const SiteSchema = new mongoose.Schema({
  url: String,
  timeSpent: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Site', SiteSchema);
