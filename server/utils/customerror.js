class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
module.exports = CustomError;

class CustomError extends Error

This means the CustomError class inherits all the properties and behavior of the built-in Error class.
constructor(message, statusCode)

It takes two arguments:
message: A string that describes the error (e.g., "User not found").
statusCode: A number representing the HTTP status code (e.g., 404 for "Not Found").
super(message);

Calls the parent Error constructor to set the error message.
this.statusCode = statusCode;

Adds a custom property to store the HTTP status code.
Error.captureStackTrace(this, this.constructor);

Captures a clean stack trace to help debug where the error happened.
module.exports = CustomError;

Exports the class so it can be used in other files.