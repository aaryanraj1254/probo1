import {render,screen}from @'testing-library/react';

import App from '../App';

test('renders Trading App header',()=>{
    render(<App />);
    const headerElement=screen.getByText(/Trading App/i)
}
