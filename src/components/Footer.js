import React from 'react';

// css
import '../css/Footer.css';
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";


const Footer = () => {

    const youtubeUrl = 'https://www.youtube.com/channel/UClsVkZZnwT2nY1Okt4MJTnw';
    const linkedInUrl = 'https://www.linkedin.com/company/fluoai/';
    const twitterUrl = 'https://twitter.com/FluoAI';

    return (
        <div className='footer'>
            <div className="footer-right">
                © Fluo AI
            </div>
            <div className="footer-left">
                <a  href={twitterUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-icon">
                    <FaXTwitter />
                </a>
                <a  href={youtubeUrl} 
                    target="_blank"
                    rel="noreferrer"
                    className="footer-icon">
                    <AiOutlineYoutube />
                </a>
                <a  href={linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-icon">
                    <SlSocialLinkedin />
                </a>
            </div>
        </div>
    );
};

export default Footer;