// models/Order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referensi ke model User
    required: true
  },
  email: {
  type: String,
  required: [true, 'Email harus diisi'],
  unique: true,
  match: [
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    'Harap isi alamat email yang valid.'
  ]
},

  password: {
    type: String,
    required: [true, 'kata sandi harus diisi'],
    minlength :[6, 'kata sandi minimal 6 karakter:'],
    select: false,
  },
  isAdmin: {
    type: String,
    enum: ['pending', 'processed', 'shipped', 'delivered', 'cancelled'],
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
