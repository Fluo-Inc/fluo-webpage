import React from 'react';
import { useInView } from 'react-intersection-observer';

// css
import '../css/Home.css';

// components
import SignupField from '../components/SignupField';
import VideoPlayer from '../components/VideoPlayer';
import Email from '../components/Email';

const Home = () => {

    // youtube video id
    const previewUrl = 'https://loca-ai.s3.us-west-1.amazonaws.com/preview.mp4';
    const guestParkingUrl = 'https://loca-ai.s3.us-west-1.amazonaws.com/5.+Guest+Parking.mp4';
    const securityUrl = 'https://loca-ai.s3.us-west-1.amazonaws.com/6-security-and-control.mp4';
    const analyticsUrl = 'https://loca-ai.s3.us-west-1.amazonaws.com/4-parking-analytics.mp4';
    const youtubeVideoId = 'dzrXlkte1Aw';

    // animation
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: signupRef, inView: signupInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: featureRef, inView: featureInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });



    return (
        <div className='Home'>
            {/* title */}
            <div className={`home-title ${titleInView ? 'bounce-up' : ''}`}
                 ref={titleRef}>
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
            <div className={`home-sigup-field ${signupInView ? 'bounce-up' : ''}`}
                 ref={signupRef}>
                    <SignupField />
            </div>

            {/* Home Video */}
            <div className="home-video">
                <VideoPlayer s3VideoUrl={previewUrl}  youtubeVideoId={youtubeVideoId}/>
            </div>

            {/* Home Features */}
            <div className="home-features">
                <div className="home-features-top">
                    <div className="home-features-item">
                        <div className={`home-features-item-title ${featureInView ? 'slide-up' : ''}`}
                             ref={featureRef}>
                            Streamline
                        </div>
                        <div className={`home-features-item-title ${featureInView ? 'slide-up' : ''}`}
                             ref={featureRef}>
                            Guest Parking
                        </div>
                        <div className="home-features-item-description">
                            Easy access for visitors
                        </div>
                        <div className="home-features-item-video-container">
                            <video
                                className="home-features-item-video"
                                src={guestParkingUrl}
                                autoPlay
                                muted
                                // loop
                                playsInline
                            />
                        </div>
                    </div>
                    <div className="home-features-item">
                        <div className={`home-features-item-title ${featureInView ? 'slide-up' : ''}`}
                             ref={featureRef}>
                            Unauthorized
                        </div>
                        <div className={`home-features-item-title ${featureInView ? 'slide-up' : ''}`}
                             ref={featureRef}>
                            Vehicle Detection
                        </div>
                        <div className="home-features-item-description">
                            Enhanced security with real-time alerts
                        </div>
                        <div className="home-features-item-video-container">
                            <video
                                className="home-features-item-video"
                                src={securityUrl}
                                autoPlay
                                muted
                                // loop
                                playsInline
                            />
                        </div>
                    </div>

                </div>
                <div className="home-features-bottom">
                    <div className="home-features-item">
                        <div className="home-features-item-title">
                            Comprehensive Metrics
                        </div>
                        <div className="home-features-item-description">
                            Real-time monitoring with user-friendly dashboard
                        </div>
                        <div className="home-features-item-video-container">
                            <video
                                className="home-features-item-video"
                                src={analyticsUrl}
                                autoPlay
                                muted
                                // loop
                                playsInline
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Home Email */}
            <div className="home-email">
                <Email />
            </div>

        </div>
    );
};

export default Home;