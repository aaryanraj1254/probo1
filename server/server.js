// Import necessary modules
const express = require('express'); 
const adminMiddleware=require('../middlewares/adminMiddlewares');
const {getAllUsers}=require('../controllers/useControllers');
const router=express.router();
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const authRoutes = require('./routes/authRoutes'); 
const opinionRoutes = require('./routes/opinionRoutes');
const tradeRoutes = require('./routes/tradeRoutes'); 
const predictionRoutes = require('./routes/predictionRoutes'); 
require dotenv.config();

// Create an instance of an Express application
const app = express();
const PORT = process.env.PORT || 5000; 

// Middleware
app.use(cors()); 
app.use(express.json()); 


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/probo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected')) // Log success message if connected
    .catch(err => console.error(err)); // Log error if connection fails

// Use routes
app.use('/api/auth', authRoutes); 
app.use('/api/opinions', opinionRoutes);
app.use('/api/trades', tradeRoutes); 
app.use('/api/predictions', predictionRoutes);
app.get('/admin/users',adminMiddleware,getAllUsers);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});