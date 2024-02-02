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
                {/* <Link to='/technology' 
                      className="navbar-link-item">
                    Features
                </Link> */}
                <Link to='/technology' 
                       className="navbar-link-item">
                    Technology
                </Link>
                <Link to='/team' 
                      className="navbar-link-item">
                    Team
                </Link>
            </div>
            <Link to="/book-demo" className="navbar-contact">
                Book a Demo
            </Link>
        </div>
    );
};

export default Navbar;