const User = require('../models/User'); // Import the User model
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for token generation

// User registration
exports.register = async (req, res) => {
    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        // Create a new user object
        const user = new User({
            email: req.body.email,
            password: hashedPassword,
        });
        
        // Save user to the database
        await user.save();
        
        // Respond with success message
        res.status(201).json({ message: 'User  registered successfully' });
    } catch (error) {
        // Handle errors and respond with error message
        res.status(500).json({ error: error.message });
    }
};

// User login
exports.login = async (req, res) => {
    try {
        // Find user by email
        const user = await User.findOne({ email: req.body.email });
        
        // If user not found, respond with an error
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }
        
        // Check if the password is correct
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        
        // Respond with the token
        res.json({ token });
    } catch (error) {
        // Handle errors and respond with error message
        res.status(500).json({ error: error.message });
    }
};