import React, { useState, useRef, useEffect } from 'react';

// css
import '../css/Team.css';

// import icons
import { SlSocialLinkedin } from "react-icons/sl";


// import image assets
import kaisen from '../assets/headshots/kaisen.svg';
import jayce from '../assets/headshots/jayce.svg';
import kristina from '../assets/headshots/kristina.svg';

const PopupWindow = ({ isVisible, onClose, content }) => {
    if (!isVisible) return null;

    return (
        <div className="team-popup-window">
            <div className="team-popup-close">
                <button className="team-popup-close-btn" onClick={onClose}>
                    X
                </button>
            </div>
            <div className="team-popup-content">
                {content}
            </div>
        </div>
    );
};

const TeamMember = ({ name, position, image, onClick }) => (
    <div className="team-member-item" onClick={onClick}>
        <div className="team-member-item-image">
            <img src={image} alt={name} />
        </div>
        <div className="team-member-item-name">{name}</div>
        <div className="team-member-item-position">{position}</div>
    </div>
);

const Team = () => {
    const teamMembers = [
        {
            name: "Kaisen Ye",
            position: "Founder & CEO",
            description: `Kaisen Ye, an Indiana University alum with a keen interest in the convergence 
            of computing and mathematics, is now pursuing a Master's in Machine Learning at USC. 
            His journey includes experience as a Software Engineer Intern at PayPal and as a Math 
            Teaching Assistant and Research Assistant at IU's geometry research lab. Outside of 
            his academic and professional pursuits, Kaisen enjoys basketball, golf, and movies, 
            embracing a well-rounded and active lifestyle.`,
            image: kaisen,
            linkedin: "https://www.linkedin.com/in/kaisenye/",
        },
        {
            name: "Jayce Pan",
            position: "Founder & CTO",
            description: `Jayce Pan, currently studying computer networking at USC, 
            brings diverse experience from his time as a Research Assistant at 
            Syracuse University, focusing on drone data collection, and as an intern 
            at Shenzhen's Bigdata Smart Center, developing a COVID Monitor System. 
            His interests extend beyond his academic pursuits to include cinematography, 
            IoT, and Japanese culture, reflecting a multifaceted approach to technology 
            and creativity.`,
            image: jayce,
            linkedin: "https://www.linkedin.com/in/xiaofengpan/",
        },
        {
            name: "Kristina Du",
            position: "Growth Lead",
            description: `
            Kristina (Yanru) Du is a University of Houston alumna currently based 
            in Los Angeles, California. She brings a strong background in enterprise 
            technology solutions, with previous roles as an Enterprise Technology 
            Solutions Associate and Intern at PwC. Furthermore, Kristina has valuable experience as 
            a Specialist at Apple, where she excelled in translating intricate technical features 
            into practical and engaging everyday use cases for consumers.Her passion lies in analytics 
            and using computer skills to tackle complex business challenges, making her a versatile professional 
            eager to explore new horizons.
            `,
            image: kristina,
            linkedin: "https://www.linkedin.com/in/kristinaydu/",
        },
    ];

    const [selectedMember, setSelectedMember] = useState(null);
    const popupRef = useRef(null);

    const handleClick = (member) => {
        setSelectedMember(member);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setSelectedMember(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className='team'>
            <div className="team-title">
                <p className='gray'>Our leadership.</p>
                <p>Your team</p>
            </div>
            <div className="team-members">
                {teamMembers.map(member => (
                    <TeamMember 
                        key={member.name} 
                        {...member} 
                        onClick={() => handleClick(member)}
                    />
                ))}
            </div>
            {selectedMember && (
                <div ref={popupRef}>
                    <PopupWindow 
                        isVisible={!!selectedMember}
                        onClose={() => setSelectedMember(null)}
                        content={
                            <div>
                                <div className='team-popup-image'>
                                    <img src={selectedMember.image} alt={selectedMember.name} />
                                </div>
                                <div className='team-popup-name'>
                                    {selectedMember.name}
                                </div>
                                <div className='team-popup-position'>
                                    {selectedMember.position}
                                </div>
                                <div className="team-popup-icon-container">
                                    <a href={selectedMember.linkedin}
                                        className="team-popup-icon" 
                                        target="_blank" 
                                        rel="noreferrer">
                                        <SlSocialLinkedin />
                                    </a>
                                </div>
                                <div className='team-popup-description'>
                                    {selectedMember.description}
                                </div>
                                
                            </div>
                        }
                    />
                </div>
            )}
        </div>
    );
};

export default Team;
