const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  plant_name: { type: String, required: true },
  description: { type: String },
  prediction: { type: String, required: true },
  file_path: { type: String, required: true }
});

const Prediction = mongoose.model('Prediction', predictionSchema);

module.exports = Prediction;