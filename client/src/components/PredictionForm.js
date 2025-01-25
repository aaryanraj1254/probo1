// src/components/PredictionForm.js
// This component renders a form for users to submit their predictions.
import React, { useState } from 'react';
import axios from 'axios';

const PredictionForm = () => {
    const [prediction, setPrediction] = useState(''); // State to hold the user's prediction

    const handleChange = (e) => {
        setPrediction(e.target.value); // Update state with the input value
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post('http://localhost:5000/api/predictions', { prediction });
            console.log('Prediction submitted:', response.data); // Log success message
        } catch (error) {
            console.error('Error submitting prediction:', error); // Log error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={prediction}
                onChange={handleChange}
                placeholder="Enter your prediction"
                required
            />
            <button type="submit">Submit Prediction</button> {/* Button to submit the prediction */}
        </form>
    );
};

export default PredictionForm;