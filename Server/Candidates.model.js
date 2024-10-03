// server/Candidates.model.js
const mongoose = require('mongoose');

const CandidatesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: String,
  selectedEvent: String,
  gender: String
});

const CandidatesModel = mongoose.model('Candidates', CandidatesSchema);

module.exports = CandidatesModel;
