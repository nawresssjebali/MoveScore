const express = require('express');
const router = express.Router();
const User = require('../models/user.model'); // Your Mongoose User model

// Route for inserting data into MongoDB
router.post('/data', async (req, res) => {
  const formData = req.body;

  try {
    // Create a new User instance based on your User model
    const newUser = new User(formData);
    
    // Save the new user to the MongoDB database
    await newUser.save();

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Data insertion failed', error });
  }
});

module.exports = router;