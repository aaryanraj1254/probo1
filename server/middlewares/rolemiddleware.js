// Define a middleware function to verify user roles
const verifyRole = (roles) => { 
    return (req, res, next) => { 
        // Check if the user information is present in the request object
        if (!req.user) { 
            return res.status(401).json({ message: 'Unauthorized. No user found in request.' });
            // If no user is found, return a 401 Unauthorized response
        }

        const { role } = req.user; // Extract the role from the user object in the request

        // Check if the user's role is included in the allowed roles
        if (!roles.includes(role)) { 
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
            // If the role is not allowed, return a 403 Forbidden response 
        }

        next(); // If the user has the required role, proceed to the next middleware or route handler
    };
};

module.exports = verifyRole; // Export the middleware function for use in other files




roles: This is an array of allowed roles, such as ['ADMIN', 'USER'], passed when the middleware is set up.
role: This is the user's role extracted from the req.user object (e.g., 'ADMIN' or 'USER').
!roles.includes(role):
roles.includes(role) checks if the user's role exists in the roles array.
The ! negates the result, so the condition evaluates to true if the user's role is not in the allowed list.


next() is a function provided by Express.js to pass control to the next middleware or route handler in the request-response cycle.
If the user's role is valid (i.e., the condition if (!roles.includes(role)) is false), the code skips the if block and executes next().