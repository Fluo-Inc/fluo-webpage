import React from 'react';
import { Link } from 'react-router-dom';

// assets
import logo from '../assets/logo.svg';

// css
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/" className="navbar-logo">
                <img src={logo} alt="logo" />
            </Link>
            <div className="navbar-link">
                <div className="navbar-link-item">
                    Team
                </div>
                <div className="navbar-link-item">
                    Technologies
                </div>
            </div>
        </div>
    );
};

export default Navbar;