// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/  // Format email yang valid
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // Opsional: otomatis tambahkan createdAt & updatedAt
});

module.exports = mongoose.model('User', userSchema);
