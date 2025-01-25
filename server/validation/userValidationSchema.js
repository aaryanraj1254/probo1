const Joi = require('joi'); // Import the Joi validation library

// Define a validation schema for user inputs
const userValidationSchema = Joi.object({
  username: Joi.string()
    .custom((value, helper) => {
      // Check if the username contains a prohibited word
      if (value.includes('badword')) {
        return helper.message('This username contains a prohibited word.'); // Custom error message
      }
      return value; // Return the value if it's valid
    })
    .min(3) // Minimum 3 characters for the username
    .max(30) // Maximum 30 characters for the username
    .required(), // Username is required
    'string.base':username must be a text
    'string.empty':username cannot be empty;
    'string.min':username cannot be min;
    'string.max':username cannot be more than 30 characters;


  email: Joi.string()
    .email() // Validate that the input is a valid email address
    .required(), // Email is required
    'string.base':plz provide a valid email adress;
    'string.empty':email cannot be empty;

  password: Joi.string()
    .min(6) // Minimum 6 characters for the password
    .required(), // Password is required
    'string.min':'password must be atlaest 30 characters long';
    'string.empty':password cannot be empty
});

// Export the validation schema for use in other files
module.exports = { userValidationSchema };

});
});
