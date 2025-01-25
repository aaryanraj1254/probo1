const jwt = require('jsonwebtoken');
const{PrismaClient}=require('@prisma/client');
const prisma=new PrismaClient();

const authMiddleware = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // Check if the token is provided
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach the decoded user information to the request object
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid token');
    }

    // Proceed to the next middleware or route handler
    return next();
};

module.exports = authMiddleware;
