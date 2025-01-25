// src/components/OpinionForm.js
// This component renders a form for users to submit their opinions.
import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for making HTTP requests

const OpinionForm = () => { // Define the OpinionForm functional component
    const [opinion, setOpinion] = useState(''); // State to hold the user's opinion

    const handleChange = (e) => { // Function to handle input changes
        setOpinion(e.target.value); // Update state with the input value
    };

    const handleSubmit = async (e) => { // Function to handle form submission
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post('http://localhost:5000/api/opinions', { opinion }); // Send POST request
            console.log('Opinion submitted:', response.data); // Log success message
            setOpinion(''); // Clear the opinion input after submission
        } catch (error) {
            console.error('Error submitting opinion:', error); // Log error message
        }
    };

    return ( // Return the JSX to be rendered
        <form onSubmit={handleSubmit}> {/* Form that triggers handleSubmit on submission */}
            <textarea
                value={opinion} // Set the value of the textarea to the opinion state
                onChange={handleChange} // Set the onChange handler to update opinion state
                placeholder="Enter your opinion" // Placeholder text for the textarea
                required // Make this field required
            />
            <button type="submit">Submit Opinion</button> {/* Button to submit the opinion */}
        </form> // End of the form element
    );
};

export default OpinionForm; // Export the OpinionForm component for use in other files