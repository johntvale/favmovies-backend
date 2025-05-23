const Joi = require('joi');

const userValidationSchema = Joi.object({
  name: Joi.string()
    .min(6)
    .max(30)
    .required()
    .messages({
      'string.base': 'Name must be a string.',
      'string.empty': 'Name is required.',
      'string.min': 'Name must be at least 6 characters long.',
      'string.max': 'Name must be at most 30 characters long.',
      'any.required': 'Name is required.',
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'Email must be a string.',
      'string.empty': 'Email is required.',
      'string.email': 'Email must be a valid email address.',
      'any.required': 'Email is required.',
    }),
  password: Joi.string()
    .min(6)
    .max(20)
    .required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,30}$/)
    .messages({
      'string.base': 'Password must be a string.',
      'string.empty': 'Password is required.',
      'string.min': 'Password must be at least 6 characters long.',
      'string.max': 'Password must be at most 20 characters long.',
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
      'any.required': 'Password is required.',
    }),
});

const userUpdateValidationSchema = Joi.object({
  name: Joi.string()
    .min(6)
    .max(30)
    .messages({
      'string.base': 'Name must be a string.',
      'string.empty': 'Name is required.',
      'string.min': 'Name must be at least 6 characters long.',
      'string.max': 'Name must be at most 30 characters long.',
    }),
  email: Joi.string()
    .email()
    .messages({
      'string.base': 'Email must be a string.',
      'string.empty': 'Email is required.',
      'string.email': 'Email must be a valid email address.',
    }),
  password: Joi.string()
    .min(6)
    .max(20)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,30}$/)
    .messages({
      'string.base': 'Password must be a string.',
      'string.empty': 'Password is required.',
      'string.min': 'Password must be at least 6 characters long.',
      'string.max': 'Password must be at most 20 characters long.',
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
    }),
  role: Joi.string()
    .valid('user', 'admin')
    .messages({
      'string.base': 'Role must be a string.',
      'any.only': 'Role must be either "user" or "admin".',
    }),
});

const isValidUser = (userData) => {
  return userValidationSchema.validate(userData, { abortEarly: false });
};

const isValidToUpdateUser = (userData) => {
  return userUpdateValidationSchema.validate(userData, { abortEarly: false });
}

module.exports = {
  isValidUser,
  isValidToUpdateUser,
};