const express = require('express'); // Import Express library
const { createPaymentIntent } = require('../services/stripeService'); // Import the createPaymentIntent function from stripeService
const router = express.Router(); // Create an Express router

// Define POST route for /pay to handle payment requests
router.post('/pay', async (req, res) => {
    const { amount } = req.body; // Extract the 'amount' from the request body

    try {
        // Call the createPaymentIntent function to create a payment intent with the given amount
        const paymentIntent = await createPaymentIntent(amount); // 'paymentIntent' should match the variable name

        // Respond with a 200 status and the 'clientSecret' for the frontend to complete the payment
        res.status(200).json({ clientSecret: paymentIntent.client_secret });

    } catch (error) {
        // If there is an error, respond with a 500 status and an error message
        res.status(500).json({ error: 'Payment processing failed' });
    }
});

module.exports = router; // Export the router to be used in the main app file

In simple terms, it is setting up an endpoint that lets users initiate a payment process. The backend creates a payment intent with the amount they want to pay and sends a secret key to the frontend so the payment can be completed securely using Stripe.


The code { clientSecret: paymentIntent.client_secret } is creating an object where:

clientSecret is the key.
paymentIntent.client_secret is the value.
