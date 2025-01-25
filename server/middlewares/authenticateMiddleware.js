const jwt = require('jsonwebtoken'); // Import the JSON Web Token library

// Middleware function to authenticate users
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from the Authorization header
    if (!token) {
        
        return res.status(401).json({ message: 'Unauthorized. Token required.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the JWT_SECRET
        req.user = decoded; // Add the decoded payload (user info) to the request object
        next(); 
    } catch (error) {
        
        res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = authenticate; 




const token = req.headers.authorization?.split(' ')[1];
req.user = decoded;
What It Does:
token Extraction:
Retrieves the token from the Authorization header (e.g., "Bearer abc123" becomes token = "abc123").
req.user Assignment:
Decodes the token (e.g., jwt.verify(token, secret)).
Stores the decoded data (e.g., { id: "123", role: "ADMIN" }) in req.user for use in other middleware or routes.
Example:
Authorization Header: "Bearer abc123"
Decoded Token: { id: "123", role: "ADMIN" }
Result:
token → "abc123"
req.user → { id: "123", role: "ADMIN" }