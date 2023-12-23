import React from 'react';

// css
import '../css/SignupField.css';

const SignupField = () => {
    return (
        <div className='signup-field'>
            <input 
                type="text" 
                className="signup-field-input" 
                placeholder="Sign up for latest updates" 
                aria-label="Email for newsletter" 
            />
            <button className="signup-field-btn">
                Join Us
            </button>
        </div>
    );
};

export default SignupField;