//main application component
// In short, App.js is essential for setting up the routing and structure of your React application, allowing users to navigate between different views or components seamlessl
// Importing necessary libraries and components
import React from 'react'; // Import React to build components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
// Router: Manages navigation in your app
// Route: Defines the paths for different pages (views)
// Switch: Ensures only one route is displayed at a time

import { loadStripe } from '@stripe/stripe-js'; 
// loadStripe: Used to connect to Stripe for payment functionality

import Register from './components/Register'; // Import the Register component (signup page)
import Login from './components/Login';       // Import the Login component (login page)

// Initialize Stripe with your public API key (replace 'your_publishable_key_here' with your real key)
const stripePromise = loadStripe('your_publishable_key_here'); 

// Main application component
const App = () => {
    return (
        // Wrap the entire application in a Router component
        <Router>
            {/* Switch ensures only one route is active at a time */}
            <Switch>
                {/* Route for the /register path - it renders the Register component */}
                <Route path="/register" component={Register} />

                {/* Route for the /login path - it renders the Login component */}
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
};

// Export the App component so it can be used elsewhere (like in index.js)
export default App;
