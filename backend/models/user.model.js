const mongoose = require('mongoose');

// Define User schema and model
const userSchema = new mongoose.Schema({

  
  name: { type: String, required: true },
  email: { type: String, required: true },
  prenom: String,
  selectedoption: String,
  selectedEducation: String,
  moyenne1: Number,
  moyenne2: Number,
  moyenne3: Number,
  moyenne4: Number,
  score: Number},
  {
    collection: 'projet' // Specify your custom collection name here
  }

);

const User = mongoose.model('User', userSchema);

module.exports = User;