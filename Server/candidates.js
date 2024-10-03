// candidates.js
const express = require('express');
const router = express.Router();

const Candidates = require('./Candidates.model');

// Get all candidates
router.get('/', (req, res) => {
  Candidates.find()
    .then(candidates => res.json(candidates))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error fetching candidates' });
    });
});

module.exports = router;
