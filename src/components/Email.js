import React from 'react';

// css
import '../css/Email.css';
import { MdOutlineMailOutline } from "react-icons/md";


const Email = () => {
    return (
        <a href="mailto:ask@fluoai.com" className='email'>
            <MdOutlineMailOutline className="email-icon"/>
            <div className="email-address">
                ask@fluoai.com
            </div>
        </a>
    );
};

export default Email;