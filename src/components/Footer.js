import React from 'react';
import { Link } from 'react-router-dom';

// css & assets
import '../css/Footer.css';
import logo from '../assets/logo.svg';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { RiTwitterXLine } from "react-icons/ri";


const Footer = () => {
    
    return (
        <div className='footer'>
            <div className="footer-info">
                <div className="footer-logo">
                    <img src={logo} 
                         alt="Fluo Logo" />
                </div>
                <div className="footer-info-social-media">
                    <div className="footer-info-social-media-item">
                        <a  href="https://www.linkedin.com/company/fluoai/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <AiOutlineLinkedin />
                        </a>
                    </div>
                    <div className="footer-info-social-media-item">
                        <a  href="https://www.youtube.com/channel/UClsVkZZnwT2nY1Okt4MJTnw" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <AiOutlineYoutube />
                        </a>
                    </div>
                    <div className="footer-info-social-media-item smaller-icon">
                        <a  href="https://twitter.com/FluoAI" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <RiTwitterXLine />
                        </a>
                    </div>
                </div>
                <div className="footer-info-license">
                    © 2024 Fluo, Inc. All rights reserved.
                </div>
                <div className="footer-info-email">

                </div>
            </div>
            <div className="footer-section">
                <div className="footer-title">
                    PLATFORM
                </div>
                <Link to='' className="footer-item">
                    Monitor
                </Link>
                <Link to='' className="footer-item">
                    Detection
                </Link>
                <Link to='' className="footer-item">
                    Analytics
                </Link>
                <Link to='' className="footer-item">
                    Alert
                </Link>
            </div>
            <div className="footer-section">
                <div className="footer-title">
                    FEATURES
                </div>
                <Link to='/about' className="footer-item">
                    Parking Access
                </Link>
                <Link to='/about' className="footer-item">
                    Guest Management
                </Link>
                <Link to='/about' className="footer-item">
                    Threat Detection
                </Link>
                <Link to='/about' className="footer-item">
                    Garage Patrol
                </Link>

            </div>
            <div className="footer-contact footer-section">
                <div className="footer-contact-title">

                </div>
                <Link to="/request_quote">
                    <div className="footer-item">

                    </div>
                </Link>
                <Link to="/contact">
                    <div className="footer-item">

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Footer;