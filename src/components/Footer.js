import React from 'react';

// css
import '../css/Footer.css';
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {

    const youtubeUrl = 'https://www.youtube.com/channel/UClsVkZZnwT2nY1Okt4MJTnw';
    return (
        <div className='footer'>
            <div className="footer-left">
                <div className="footer-icon">
                    <FaXTwitter />
                </div>
                <a  href={youtubeUrl} 
                    target="_blank"
                    rel="noreferrer"
                    className="footer-icon">
                    <AiOutlineYoutube />
                </a>
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