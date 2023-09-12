const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user.model'); // Your MongoDB User model
const sequelize = require('../config/database'); // Your Sequelize configuration

const router = express.Router();

// Configure Passport to use a Local strategy for authentication
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      // Check if the user exists in the MySQL database
      const user = await sequelize.models.User.findOne({ where: { username } });

      if (!user) {
        return done(null, false, { message: 'User not found' });
      }

      // Compare hashed passwords
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password' });
      }
    } catch (error) {
      return done(error);
    }
  }
));

// POST /api/login
router.post('/', passport.authenticate('local'), (req, res) => {
  // Authentication successful, send a response
  res.status(200).json({ message: 'Login successful' });
});

module.exports = router;