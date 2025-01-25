// src/components/TradeForm.js
// This component renders a form for users to submit trade information.
import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for making HTTP requests

const TradeForm = () => { // Define the TradeForm functional component
    const [tradeData, setTradeData] = useState({ // State to hold trade data
        symbol: '', // Stock symbol
        quantity: '', // Quantity of stocks to trade
        price: '' // Price at which to trade
    });

    const handleChange = (e) => { // Function to handle input changes
        const { name, value } = e.target; // Destructure name and value from the event target
        setTradeData({ ...tradeData, [name]: value }); // Update state with the new value
    };

    const handleSubmit = async (e) => { // Function to handle form submission
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post('http://localhost:5000/api/trades', tradeData); // Send POST request
            console.log('Trade submitted:', response.data); // Log success message
        } catch (error) {
            console.error('Error submitting trade:', error); // Log error message
        }
    };

    return ( // Return the JSX to be rendered
        <form onSubmit={handleSubmit}> {/* Form that triggers handleSubmit on submission */}
            <input
                type="text" // Input type for text
                name="symbol" // Name of the input field
                value={tradeData.symbol} // Set the value of the input to the symbol state
                onChange={handleChange} // Set the onChange handler to update symbol state
                placeholder="Stock Symbol" // Placeholder text for the input
                required // Make this field required
            />
            <input
                type="number" // Input type for number
                name="quantity" // Name of the input field
                value={tradeData.quantity} // Set the value of the input to the quantity state
                onChange={handleChange} // Set the onChange handler to update quantity state
                placeholder="Quantity" // Placeholder text for the input
                required // Make this field required
            />
            <input
                type="number" // Input type for number
                name="price" // Name of the input field
                value={tradeData.price} // Set the value of the input to the price state
                onChange={handleChange} // Set the onChange handler to update price state
                placeholder="Price" // Placeholder text for the input
                required // Make this field required
            />
            <button type="submit">Submit Trade</button> {/* Button to submit the trade */}
        </form> // End of the form element
    );
};

export default TradeForm; //