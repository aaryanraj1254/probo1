import { render, screen } from '@testing-library/react';
import TradeForm from '../TradeForm'; // Adjust the path as necessary

test('renders TradeForm with input fields', () => {
    render(<TradeForm />); // Render the TradeForm component
    const symbolInput = screen.getByPlaceholderText(/Symbol/i); // Look for the symbol input field
    const quantityInput = screen.getByPlaceholderText(/Quantity/i); // Look for the quantity input field
    const submitButton = screen.getByRole('button', { name: /Trade/i }); // Look for the trade button

    expect(symbolInput).toBeInTheDocument(); // Check if the symbol input field is in the document
    expect(quantityInput).toBeInTheDocument(); // Check if the quantity input field is in the document
    expect(submitButton).toBeInTheDocument(); // Check if the trade button is in the document
});