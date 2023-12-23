import React from 'react';

// css
import '../css/Home.css';

// components
import SignupField from '../components/SignupField';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {

    // youtube video id
    const s3VideoUrl = 'https://loca-ai.s3.us-west-1.amazonaws.com/preview.mp4';
    const youtubeVideoId = 'YChioDnHxm4';


    return (
        <div className='Home'>
            {/* title */}
            <div className="home-title">
                <div className="home-title-bold">
                    Automate
                </div>
                <div className="home-title-regular">
                    Apartment Parking Management
                </div>
                <div className="home-title-description">
                    Leverages advanced computer vision technology
                </div>
            </div>

            {/* signup field */}
            <div className="home-sigup-field">
                    <SignupField />
            </div>

            {/* Home Video */}
            <div className="home-video">
                <VideoPlayer s3VideoUrl={s3VideoUrl}  youtubeVideoId={youtubeVideoId}/>
            </div>


            
        </div>
    );
};

export default Home;