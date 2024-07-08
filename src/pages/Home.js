import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// css
import '../css/Home.css';

// components
import VideoPlayer from '../components/VideoPlayer';
import Stats from '../components/Stats';


const homeTitleOptions = [
    "Gargage Patrol",
    "Incident Investigation",
    "Security Compliance"
];


const Home = () => {

    // youtube video id
    const previewUrl = 'https://loca-ai.s3.us-west-1.amazonaws.com/preview.mp4';
    const youtubeVideoId = 'dzrXlkte1Aw';

    // home title changing animation
    const [currentText, setCurrentText] = useState('');
    const [arrayIndex, setArrayIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typingDelay = 30; // Milliseconds to wait before typing the next character
        const nextTextDelay = 2200; // Milliseconds to wait before switching to the next text
        let typingTimeout;

        if (charIndex < homeTitleOptions[arrayIndex].length) {
            typingTimeout = setTimeout(() => {
                setCurrentText(currentText => currentText + homeTitleOptions[arrayIndex][charIndex]);
                setCharIndex(charIndex + 1);
            }, typingDelay);
        } else {
            typingTimeout = setTimeout(() => {
                setCurrentText('');
                setCharIndex(0);
                setArrayIndex((arrayIndex + 1) % homeTitleOptions.length);
            }, nextTextDelay);
        }

        return () => clearTimeout(typingTimeout);
    }, [currentText, arrayIndex, charIndex]);


    // animation
    const { ref: imgRef1, inView: imgInView1 } = useInView({ triggerOnce: true, threshold: 1, delay: 200 });
    const { ref: titleRef1, inView: titleInView1 } = useInView({ triggerOnce: true, threshold: 1, delay: 400 });
    const { ref: descriptionRef1, inView: descriptionInView1 } = useInView({ triggerOnce: true, threshold: 1, delay: 600 });
    const { ref: imgRef2, inView: imgInView2 } = useInView({ triggerOnce: true, threshold: 1, delay: 200 });
    const { ref: titleRef2, inView: titleInView2 } = useInView({ triggerOnce: true, threshold: 1, delay: 400 });
    const { ref: descriptionRef2, inView: descriptionInView2 } = useInView({ triggerOnce: true, threshold: 1, delay: 600 });
    const { ref: imgRef3, inView: imgInView3 } = useInView({ triggerOnce: true, threshold: 1, delay: 200 });
    const { ref: titleRef3, inView: titleInView3 } = useInView({ triggerOnce: true, threshold: 1, delay: 400 });
    const { ref: descriptionRef3, inView: descriptionInView3 } = useInView({ triggerOnce: true, threshold: 1, delay: 600 });



    return (
        <div className='Home'>
            {/* header */}
            <div className="home-header">
                {/* title */}
                <div className='home-title'>
                    <div className="home-title-bold">
                        Automate
                    </div>
                    <div className="home-title-bold">
                        {currentText}<span className="cursor">|</span>
                    </div>
                    <div className="home-title-description">
                        Streamline and scale your 
                        <span className='primary'> property security investigation and compliance </span>
                        with Fluo AI-powered solution
                    </div>
                    {/* signup field
                    <div className={`home-sigup-field ${signupInView ? 'bounce-up' : ''}`}
                        ref={signupRef}>
                            <SignupField />
                    </div> */}
                     <Link to="/book-demo"
                           className="home-contact">
                        Book a Demo
                    </Link>
                </div>

                {/* Home Video */}
                <div className="home-video">
                    <VideoPlayer s3VideoUrl={previewUrl}  youtubeVideoId={youtubeVideoId}/>
                </div>
            </div>

            {/* home stats */}
            <div className="home-stats">
                {/* <Stats /> */}
            </div>

            {/* home slogan */}
            <div className="home-benefits">
                <div className="home-benefits-title">
                    Unleash property manager's potential
                </div>
                <div className="home-benefits-description">
                    Fluo takes care your residential parking tasks, 
                    giving property managers the freedom to focus on what matters most.
                </div>

                <div className="home-benefits-item">
                    <div className={`home-benefits-item-img ${imgInView1 ? 'slide-up' : ''}`} 
                         ref={imgRef1}>
                        <img src="https://loca-ai.s3.us-west-1.amazonaws.com/svg/home-benefit-1.png"
                             alt="efficient work" />
                    </div>
                    <div className="home-benefits-item-text">
                        <div className={`home-benefits-item-title ${titleInView1 ? 'slide-up' : ''}`} 
                             ref={titleRef1}>
                            A foundation for more efficient work
                        </div>
                        <div className={`home-benefits-item-description ${descriptionInView1 ? 'slide-up' : ''}`} 
                             ref={descriptionRef1}>
                            With your data centralized in one platform, 
                            there are endless possibilities to transform the 
                            way your team works by applying automation and 
                            AI to maximize productivity and values.
                        </div>
                    </div>
                </div>


                <div className="home-benefits-item">
                    <div className={`home-benefits-item-img ${imgInView2 ? 'slide-up' : ''}`} 
                         ref={imgRef2}>
                        <img src="https://loca-ai.s3.us-west-1.amazonaws.com/svg/home-benefit-2.png"
                             alt="efficient work" />
                    </div>
                    <div className="home-benefits-item-text">
                        <div className={`home-benefits-item-title ${titleInView2 ? 'slide-up' : ''}`} 
                             ref={titleRef2}>
                            An unrivaled experience, for everyone
                        </div>
                        <div className={`home-benefits-item-description ${descriptionInView2 ? 'slide-up' : ''}`} 
                             ref={descriptionRef2}>
                            Intuitive, easy-to-use design translates across devices and teams, 
                            making every interaction feel effortless for your team, 
                            your residents, and owners — anytime, and anywhere.
                        </div>
                    </div>
                </div>
                <div className="home-benefits-item">
                    <div className={`home-benefits-item-img ${imgInView3 ? 'slide-up' : ''}`} 
                         ref={imgRef3}>
                        <img src="https://loca-ai.s3.us-west-1.amazonaws.com/svg/home-benefit-3.png"
                             alt="efficient work" />
                    </div>
                    <div className="home-benefits-item-text">
                        <div className={`home-benefits-item-title ${titleInView3 ? 'slide-up' : ''}`} 
                             ref={titleRef3}>
                            A framework designed for growth and scale
                        </div>
                        <div className={`home-benefits-item-description ${descriptionInView3 ? 'slide-up' : ''}`} 
                             ref={descriptionRef3}>
                            Easily manage multiple parking sites from a single platform, 
                            peace of mind for property managers and security staff.
                        </div>
                    </div>
                </div>
                
            </div>

            

            

            {/* Home Email */}
            {/* <div className="home-email">
                <Email />
            </div> */}

        </div>
    );
};

export default Home;