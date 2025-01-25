import { render, screen } from '@testing-library/react';
import Header from '../Header'; 

test('renders Trading App header', () => {
    render(<Header />); 
    const headerElement = screen.getByText(/Trading App/i);
    expect(headerElement).toBeInTheDocument(); 
});