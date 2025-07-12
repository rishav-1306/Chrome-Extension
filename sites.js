const express = require('express');
const router = express.Router();
const Site = require('../models/Site');

// Save site data
router.post('/', async (req, res) => {
  const { url, timeSpent } = req.body;
  const newSite = new Site({ url, timeSpent });
  await newSite.save();
  res.json({ success: true });
});

// Get today's report
router.get('/report', async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const data = await Site.find({ date: { $gte: today } });
  res.json(data);
});

module.exports = router;
