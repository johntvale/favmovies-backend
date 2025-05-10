const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  favoriteList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }],
  watchLaterList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }],
  watchedList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }],
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;