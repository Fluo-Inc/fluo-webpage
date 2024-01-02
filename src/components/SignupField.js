import React, { useState } from 'react';

// css
import '../css/SignupField.css';

const SignupField = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null); 
    const [isLoading, setIsLoading] = useState(false); // Added for loading state

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage(null);
        setIsLoading(true); // Start loading

        // Simple regex for email validation
        const emailRegex = /\S+@\S+\.\S+/;
        if (!email) {
            setMessage('Please enter a valid email.');
            setIsLoading(false);
            return;
        } else if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email format.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('https://fluo-email-sign-up.vercel.app/api/submit_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });
            
            const result = await response.json();
            if (response.ok) {
                // Handle successful email submission here
                setMessage('Thanks a ton for signing up!');
            } else {
                // Handle errors here
                setMessage(result.error || 'Failed to submit email.');
            }
        } catch (error) {
            console.error('Error submitting email', error);
            setMessage('Error submitting email.');
        }

        setIsLoading(false); // Stop loading
    };

    return (
        <div className="signup-field">
            <div className='signup-field-form'>
                <input 
                    type="email" 
                    className="signup-field-input" 
                    placeholder="Sign up for latest updates" 
                    aria-label="Email for newsletter" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="signup-field-btn" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "Loading.." : 'Join Us'} {/* Change text based on loading state */}
                </button>
            </div>
            {message && <div className="signup-message">{message}</div>} {/* Message box */}
        </div>
        
    );
};

export default SignupField;