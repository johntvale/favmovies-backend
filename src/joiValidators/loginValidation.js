const Joi = require('joi');

const loginValidationSchema = Joi.object({
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

const isValidLogin = (userData) => {
  return loginValidationSchema.validate(userData, { abortEarly: false });
};

module.exports = {
  isValidLogin,
};