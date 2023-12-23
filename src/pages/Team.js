import React from 'react';

// css
import '../css/Team.css';


const Team = () => {

    const headshotKyURL = 'https://loca-ai.s3.us-west-1.amazonaws.com/headshots/headshot+-+KY.png';
    const headshotJpURL = 'https://loca-ai.s3.us-west-1.amazonaws.com/headshots/headshot+-+JP.png';

    const descriptionJP = `
        Jayce Pan, currently studying computer networking at USC, 
        brings diverse experience from his time as a Research Assistant at 
        Syracuse University, focusing on drone data collection, and as an intern 
        at Shenzhen's Bigdata Smart Center, developing a COVID Monitor System. 
        His interests extend beyond his academic pursuits to include cinematography, 
        IoT, and Japanese culture, reflecting a multifaceted approach to technology 
        and creativity.
    `;

    const descriptionKY = `
        Kaisen Ye, an Indiana University alum with a keen interest in the convergence 
        of computing and mathematics, is now pursuing a Master's in Machine Learning at USC. 
        His journey includes experience as a Software Engineer Intern at PayPal and as a Math 
        Teaching Assistant and Research Assistant at IU's geometry research lab. Outside of 
        his academic and professional pursuits, Kaisen enjoys basketball, golf, and movies, 
        embracing a well-rounded and active lifestyle.
    `;



    return (
        <div className='team'>
            <div className="team-title">
                Meet our team
            </div>
            <div className="team-description">

            </div>
            <div className="team-members">
                <div className="team-member-item">
                    <div className="team-member-item-image">
                        <img src={headshotKyURL} alt="" />
                    </div>
                    <div className="team-member-item-name">
                        Kaisen Ye
                    </div>
                    <div className="team-member-item-position">
                        Founder & CEO
                    </div>
                    <div className="team-member-item-description">
                        {descriptionKY}
                    </div>
                </div>
                <div className="team-member-item">
                    <div className="team-member-item-image">
                        <img src={headshotJpURL} alt="" />
                    </div>
                    <div className="team-member-item-name">
                        Jayce Pan
                    </div>
                    <div className="team-member-item-position">
                        Founder & CTO
                    </div>
                    <div className="team-member-item-description">
                        {descriptionJP}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;