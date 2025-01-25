import React, { useState } from 'react';
// Importing React and useState hook to manage the component's state.

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// Importing Stripe hooks and components:
// - useStripe: To access Stripe instance.
// - useElements: To interact with Stripe Elements.
// - CardElement: Pre-built Stripe UI component for securely collecting card details.

import axios from 'axios';
// Importing Axios for making HTTP requests to the backend API.

const PaymentForm = () => {
  const stripe = useStripe();
  // Initializing the Stripe instance. This will handle payments.

  const elements = useElements();
  // Accessing Stripe Elements to retrieve user input from the CardElement.

  const [amount, setAmount] = useState(1000);
  // Defining state for the payment amount. Default is 1000 cents ($10).

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Preventing the default form submission behavior.

    // Backend API call to create a payment intent
    const { data } = await axios.post('http://localhost:5000/api/pay', { amount });
    // Sending a POST request to the backend to create a Payment Intent with the specified amount.
    // Backend will return a clientSecret for completing the payment.

    const { clientSecret } = data;
    // Extracting the client secret from the backend response.

    // Confirming the payment using Stripe
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        // Linking the card details entered by the user with the payment method.
      },
    });

    if (result.error) {
      console.error(result.error.message);
      // Logging the error if the payment fails.
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert('Payment successful!');
        // Showing a success message if the payment is completed.
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form to handle payment submission */}
      <CardElement />
      {/* Stripe's pre-built card input field */}
      <button type="submit" disabled={!stripe}>
        {/* Button to trigger payment submission */}
        Pay ${amount / 100}
        {/* Displaying the payment amount in dollars */}
      </button>
    </form>
  );
};

export default PaymentForm;
// Exporting the PaymentForm component so it can be used in other parts of the app.
