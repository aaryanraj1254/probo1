import React, { useState } from 'react'; // Import React and useState hook
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'; // Import Stripe hooks and CardElement
import axios from 'axios'; // Import axios for making HTTP requests

const PaymentForm = () => {
    const stripe = useStripe(); // Initialize Stripe instance
    const elements = useElements(); // Initialize Elements instance
    const [amount, setAmount] = useState(1000); // Set default amount (1000 = $10)

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (!stripe || !elements) return; // Ensure Stripe and Elements are loaded

        try {
            // Make a POST request to backend to create payment intent with the amount
            const { data } = await axios.post('http://localhost:5000/api/pay', { amount });

            const { clientSecret } = data; // Extract clientSecret from response

            // Confirm the payment with the card details
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement), // Get the card details from CardElement
                },
            });

            if (result.error) {
                console.log(result.error.message); // Log error message if payment fails
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    alert('Payment successful!'); // Alert user if payment succeeds
                }
            }
        } catch (error) {
            console.error('Error processing payment', error); // Log any errors during the process
        }
    };

    return (
        <form onSubmit={handleSubmit}> {/* Form submission handler */}
            <CardElement /> {/* Display the card input field */}
            <button type="submit" disabled={!stripe}>Pay ${amount / 100}</button> {/* Submit button, disabled until Stripe is ready */}
        </form>
    );
};


export default PaymentForm; // Export the PaymentForm component

