import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// assets
import logo from '../assets/logo.svg';

// css
import '../css/Navbar.css';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoArrowBackCircleOutline } from "react-icons/io5";


const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 1000) {
                setIsExpanded(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='navbar'>
            <Link to="/" className="navbar-logo">
                <img src={logo} alt="logo" />
            </Link>
            <div className="navbar-right">
                <div className={`navbar-link ${isExpanded || windowWidth > 1000 ? 'expanded' : 'collapsed'}`}
                     onClick={toggleNavbar}>
                    <div className="navbar-link-item">Products</div>
                    <div className="navbar-link-item">Use Cases</div>
                    <Link to='/technology' className="navbar-link-item">Technology</Link>
                    <Link to='/team' className="navbar-link-item">Team</Link>
                </div>
                <Link to="/book-demo" className="navbar-contact">Book a Demo</Link>
                <div className={`navbar-toggler ${isExpanded || windowWidth > 1000 ? 'expanded' : 'collapsed'}`} onClick={toggleNavbar}>
                    {/* Icon or text to indicate menu expansion */}
                    {isExpanded ? <IoArrowBackCircleOutline /> : <HiMenuAlt3 />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;