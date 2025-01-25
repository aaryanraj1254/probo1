// src/components/Header.js
// This component renders the header of the application with the main title.
import React from 'react'; // Import React library

const Header = () => { // Define the Header functional component
    return ( // Return the JSX to be rendered
        <header> // Start of the header element
            <h1>Trade Application</h1> {/* Main title of the application */}
        </header> // End of the header element
    );
};

export default Header; // Export the Header component for use in other files