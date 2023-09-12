const express = require('express');
const router = express.Router();
const User = require('../models/user.model.js'); // Import your Mongoose model

// Route for submitting form data
router.post('/submit-form', async (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  let score;

  if (formData.selectedEducation === 'Licence') {
    score = (formData.moyenne1 + formData.moyenne2 + (formData.moyenne3 * 2) + formData.moyenne4) / 5;
  } else {
    score = (formData.moyenne1 + formData.moyenne2 + (formData.moyenne3 * 2)) / 4;
  }

  formData.score = score;

  try {
    const newUser = new User(formData);
    await newUser.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Data insertion failed', error });
  }
});

// Route for fetching sorted users
router.get('/get-users-sorted', async (req, res) => {
  console.log('Inside /get-users-sorted route'); // Debugging line

  try {
    const users = await User.find().sort({ score: -1 }).exec();
    console.log('Fetched sorted users:', users); // Debugging line
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching sorted users:', err);
    res.status(500).json({ message: 'Error fetching sorted users' });
  }
});

module.exports = router;