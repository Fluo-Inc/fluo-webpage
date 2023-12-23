import React from 'react';

// css
import '../css/Footer.css';
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-left">
                <div className="footer-icon">
                    <FaXTwitter />
                </div>
                <div className="footer-icon">
                    <AiOutlineYoutube />
                </div>
                <div className="footer-icon">
                    <SlSocialLinkedin />
                </div>
            </div>
            <div className="footer-right">
                © 2023 Fluo AI
            </div>
        </div>
    );
};

export default Footer;