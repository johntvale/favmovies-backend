const mongoose = require('mongoose');
const { CATEGORIES } = require('../utils/categoryList');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    enum: CATEGORIES,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  director: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  trailerUrl: {
    type: String,
    required: true,
  },
  cast: {
    type: [String],
  },
  ratings: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true },
      score: {
        type: Number,
        min: 0,
        max: 5,
        required: true
      },
    }
  ],
  averageRating: {
    type: Number,
    default: 0
  },
  favorite: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      favorite: {
        type: Boolean,
        required: true
      },
    }
  ],
  favoriteCount: {
    type: Number,
    default: 0
  },
  view: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      view: {
        type: Number,
        required: true
      },
    }
  ],
  viewCount: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;