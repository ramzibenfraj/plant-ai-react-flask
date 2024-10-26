
const express = require('express');
const router = express.Router();
const Prediction = require('../../models/prediction');

// GET all predictions
router.get('/', async (req, res) => {
  try {
    const predictions = await Prediction.find();
    res.json(predictions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
