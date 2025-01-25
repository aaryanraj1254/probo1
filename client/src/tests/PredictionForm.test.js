import { render, screen } from '@testing-library/react';
import PredictionForm from '../PredictionForm'; // Adjust the path as necessary

test('renders PredictionForm with input fields', () => {
    render(<PredictionForm />); // Render the PredictionForm component
    const predictionInput = screen.getByPlaceholderText(/Make a prediction/i); // Look for the prediction input field
    const submitButton = screen.getByRole('button', { name: /Submit/i }); // Look for the submit button

    expect(predictionInput).toBeInTheDocument(); // Check if the prediction input field is in the document
    expect(submitButton).toBeInTheDocument(); // Check if the submit button is in the document
});