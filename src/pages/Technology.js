import React from 'react';

// css
import '../css/Technology.css';

// assets
import aiGrowth from '../assets/aigrowth.svg';
import aiEvovle from '../assets/aievolve.svg';


const Technology = () => {
    return (
        <div className='tech'>
            <div className="tech-header">
                <div className="tech-title">
                    Innovation At the Core
                </div>
                <div className="tech-description">
                    Discover how Fluo's cutting-edge AI and vision-driven technology 
                    revolutionizes apartment parking management.
                </div>
            </div>

            {/* ai engine */}
            <div className="tech-section ">
                <div className="tech-section-title">
                    Fluo AI Engine
                </div>
                <div className="tech-section-top tech-ai-engine">
                    <div className="tech-section-top-title">
                        Over 99%
                    </div>
                    <div className="tech-section-top-description">
                        accuracy across all state license plates
                    </div>
                    <div className="tech-section-top-svg">
                        <img src={aiGrowth} alt="ai growth" />
                    </div>
                </div>
                <div className="tech-section-bottom">
                    <div className="tech-section-bottom-item tech-ai-engine">
                        <div className="tech-section-bottom-item-header">
                            <div className="tech-section-bottom-item-title">
                                Less than 2s
                            </div>
                            <div className="tech-section-bottom-item-description">
                                average detection speed
                            </div>
                        </div>
                        <div className="tech-section-bottom-svg">
                            {/* <img src={aiEvovle} alt="ai growth" /> */}
                        </div>
                    </div>
                    <div className="tech-section-bottom-item tech-ai-engine">
                        <div className="tech-section-bottom-item-header">
                            <div className="tech-section-bottom-item-title">
                                Adaptive Learning
                            </div>
                            <div className="tech-section-bottom-item-description">
                                constantly evolving
                            </div>
                        </div>
                        <div className="tech-section-bottom-svg">
                            <img src={aiEvovle} alt="ai growth" />
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Technology;