const Joi = require('joi');
const { CATEGORIES } = require('../utils/categoryList');

const movieSchema = Joi.object({
  title: Joi.string()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.empty': 'Title cannot be empty',
      'string.min': 'Title must be at least 2 characters long',
      'string.max': 'Title must be less than 100 characters long'
    }),
  description: Joi.string()
    .min(2)
    .max(500)
    .required()
    .messages({
      'string.empty': 'Description cannot be empty',
      'string.min': 'Description must be at least 2 characters long',
      'string.max': 'Description must be less than 500 characters long'
    }),
  category: Joi.array()
    .items(Joi.string().valid(...CATEGORIES))
    .min(1)
    .required()
    .messages({
      'array.base': 'Category must be an array of strings',
      'array.min': 'Category must have at least one item',
      'any.only': 'Category must be a valid category'
    }),
  releaseDate: Joi.date()
    .required()
    .messages({
      'date.base': 'Release date must be a valid date',
      'date.empty': 'Release date cannot be empty'
    }),
  director: Joi.string()
    .min(2)
    .max(100)
    .messages({
      'string.min': 'Director name must be at least 2 characters long',
      'string.max': 'Director name must be less than 100 characters long'
    }),
    trailerUrl: Joi.string()
      .uri()
      .required()
      .messages({
        'string.uri': 'Trailer URL must be a valid URI',
        'string.empty': 'Trailer URL cannot be empty'
      }),
  imageUrl: Joi.string()
    .uri()
    .required()
    .messages({
      'string.uri': 'Image URL must be a valid URI',
      'string.empty': 'Image URL cannot be empty'
    }),
  cast: Joi.array()
    .items(
      Joi.string()
        .min(2)
        .max(100)
        .messages({
          'string.min': 'Each cast member must be at least 2 characters long',
          'string.max': 'Each cast member must be less than 100 characters long'
        })
    )
    .min(1)
    .messages({
      'array.base': 'Cast must be an array of strings',
      'array.min': 'Cast must have at least one item if provided'
    }),
  ratings: Joi.array()
    .items(
      Joi.object({
        user: Joi.string().required(),
        score: Joi.number().min(0).max(5).required()
      })
    )
    .messages({
      'array.base': 'Ratings must be an array of objects',
      'array.includes': 'Each rating must include a valid user and score'
    }),
  averageRating: Joi.number().default(0),
  favorite: Joi.array()
    .items(
      Joi.object({
        user: Joi.string().required(),
        favorite: Joi.boolean().required()
      })
    )
    .messages({
      'array.base': 'Favorite must be an array of objects',
      'array.includes': 'Each favorite must include a valid user and favorite status'
    }),
  favoriteCount: Joi.number().default(0),
  view: Joi.array()
    .items(
      Joi.object({
        user: Joi.string().required(),
        view: Joi.boolean().required()
      })
    )
    .messages({
      'array.base': 'View must be an array of objects',
      'array.includes': 'Each view must include a valid user and view status'
    }),
  viewCount: Joi.number().default(0)
});

const movieToUpdateSchema = Joi.object({
  title: Joi.string()
    .min(2)
    .max(100)
    .messages({
      'string.empty': 'Title cannot be empty',
      'string.min': 'Title must be at least 2 characters long',
      'string.max': 'Title must be less than 100 characters long'
    }),
  description: Joi.string()
    .min(2)
    .max(500)
    .messages({
      'string.empty': 'Description cannot be empty',
      'string.min': 'Description must be at least 2 characters long',
      'string.max': 'Description must be less than 500 characters long'
    }),
  category: Joi.array()
    .items(Joi.string().valid(...CATEGORIES))
    .min(1)
    .messages({
      'array.base': 'Category must be an array of strings',
      'array.min': 'Category must have at least one item',
      'any.only': 'Category must be a valid category'
    }),
  releaseDate: Joi.date()
    .messages({
      'date.base': 'Release date must be a valid date',
      'date.empty': 'Release date cannot be empty'
    }),
  director: Joi.string()
    .min(2)
    .max(100)
    .messages({
      'string.min': 'Director name must be at least 2 characters long',
      'string.max': 'Director name must be less than 100 characters long'
    }),
  trailerUrl: Joi.string()
    .uri()
    .messages({
      'string.uri': 'Image URL must be a valid URI',
      'string.empty': 'Image URL cannot be empty'
    }),
  imageUrl: Joi.string()
    .uri()
    .messages({
      'string.uri': 'Image URL must be a valid URI',
      'string.empty': 'Image URL cannot be empty'
    }),
  cast: Joi.array()
    .items(
      Joi.string()
        .min(2)
        .max(100)
        .messages({
          'string.min': 'Each cast member must be at least 2 characters long',
          'string.max': 'Each cast member must be less than 100 characters long'
        })
    )
    .min(1)
    .messages({
      'array.base': 'Cast must be an array of strings',
      'array.min': 'Cast must have at least one item if provided'
    }),
  ratings: Joi.array()
    .items(
      Joi.object({
        user: Joi.string().required(),
        score: Joi.number().min(0).max(5).required()
      })
    )
    .messages({
      'array.base': 'Ratings must be an array of objects',
      'array.includes': 'Each rating must include a valid user and score'
    }),
  averageRating: Joi.number().default(0),
  favorite: Joi.array()
    .items(
      Joi.object({
        user: Joi.string().required(),
        favorite: Joi.boolean().required()
      })
    )
    .messages({
      'array.base': 'Favorite must be an array of objects',
      'array.includes': 'Each favorite must include a valid user and favorite status'
    }),
  favoriteCount: Joi.number().default(0),
  view: Joi.array()
    .items(
      Joi.object({
        user: Joi.string().required(),
        view: Joi.boolean().required()
      })
    )
    .messages({
      'array.base': 'View must be an array of objects',
      'array.includes': 'Each view must include a valid user and view status'
    }),
  viewCount: Joi.number().default(0)
});

const isValidMovie = (movieData) => {
  console.log(movieSchema.validate(movieData, { abortEarly: false }));
  return movieSchema.validate(movieData, { abortEarly: false });
}

const isValidToUpdateMovie = (movieData) => {
  return movieToUpdateSchema.validate(movieData, { abortEarly: false });
}

module.exports = {
  isValidMovie,
  isValidToUpdateMovie
};