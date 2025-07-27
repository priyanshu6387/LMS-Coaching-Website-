const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');

// API: GET /api/sales/2014
router.get('/:year', async (req, res) => {
  try {
    const year = parseInt(req.params.year);
    const sales = await Sale.aggregate([
      {
        $match: {
          date: {
            $gte: new Date(`${year}-01-01`),
            $lt: new Date(`${year + 1}-01-01`)
          }
        }
      }
    ]);

    res.json({ count: sales.length, data: sales });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
