// backend/validation/registerValidation.js

const Joi = require('joi');

// Define the validation schema
const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(), // Email must be a valid email format
    password: Joi.string().min(6).required(), // Password must have at least 6 characters
  });

  // Validate the data and return the result
  return schema.validate(data);
};

module.exports = registerValidation;
