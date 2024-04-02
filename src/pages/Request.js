import React from 'react';

// css
import '../css/Request.css';

// components
import BookDemo from '../components/BookDemo';

// assets
import demoImg from '../assets/demo.webp';

const Request = () => {
    return (
        <div className='request'>
            <div className="request-form">
                <div className="request-form-left">
                    <div className="request-form-img">
                        <img src={demoImg} alt="demo" />
                    </div>
                </div>
                <div className="request-form-right">
                    <BookDemo />
                </div>
            </div>
        </div>
    );
};

export default Request;