const Joi = require('joi');

const categoryValidationSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.base': 'Category name must be a string.',
      'string.empty': 'Category name is required.',
      'string.min': 'Category name must be at least 3 characters long.',
      'string.max': 'Category name must be at most 50 characters long.',
      'any.required': 'Category name is required.',
    }),
});

const isValidCategory = (categoryName) => {
  return categoryValidationSchema.validate(categoryName, { abortEarly: false });
}

module.exports = {
  isValidCategory,
};
