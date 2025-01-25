
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Optional, for parsing request bodies
const apiRoutes = require('./routes/api'); // Import your routes
const authMiddleware = require('./middlewares/authMiddleware'); // Import your auth middleware (if needed)
const errorMiddleware=require('./middlewares/errorMiddleware');
const paymentRoutes=require('../routes/paymentRoutes');
const useRoutes=require('./routes/userRoutes');
const i8next=require('./config/i18n');
const i18nextMiddleware=require('i8next-http-middleware');
const errorHandler=require('./middlewares/errorHandler');



//create an instance of an express application
const app = express();

// Middleware setup
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Use your API routes
app.use('/api', apiRoutes); 


//use i18next middleware
app.use(i18nextMiddleware.handle(i18next));

app.get('/welcome',(req,res)=>{
    const message=req.t('welcome');
    res.json({message});
});

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error(err));
