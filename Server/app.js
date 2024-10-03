// server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const candidatesRoutes = require('./candidates.js'); 
const CandidatesModel = require('./Candidates.model.js'); 

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/candidates', candidatesRoutes);

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    CandidatesModel.findOne({ email: email })
      .then((user) => {
        if (user) {
          // Verify password
          if (user.password === password) {
            res.json({ message: 'success', user });
          } else {
            res.json({ message: 'The password is incorrect' });
          }
        } else {
          res.json({ message: 'No record exists' });
        }
      })
      .catch((error) => {
        console.error(error); // Log the error
        res.status(500).json({ message: 'An error occurred' });
      });
});

// Signup endpoint
app.post('/signup', (req, res) => {
    CandidatesModel.create(req.body)
      .then((employee) => res.json(employee))
      .catch((err) => res.json(err));
});

module.exports = app;
