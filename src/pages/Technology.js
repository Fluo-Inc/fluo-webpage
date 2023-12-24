import React from 'react';

// css
import '../css/Technology.css';
import { IoInfiniteSharp } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";


// assets
import aiGrowth from '../assets/aigrowth.svg';
import aiEvovle from '../assets/aievolve.svg';
import hardware1 from '../assets/hardware1.svg';
import softare1 from '../assets/software1.svg';


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

            {/* hardware */}
            <div className="tech-section ">
                <div className="tech-section-title">
                    Hardwares
                </div>
                <div className="tech-section-top tech-hardwares">
                    <div className="tech-section-top-title">
                        Compoenent Design
                    </div>
                    <div className="tech-section-top-description">
                        modular parts for easy replacement
                    </div>
                    <div className="tech-section-top-svg">
                        <img src={hardware1} alt="ai growth" />
                    </div>
                </div>
                <div className="tech-section-bottom">
                    <div className="tech-section-bottom-item tech-hardwares">
                        <div className="tech-section-bottom-item-header">
                            <div className="tech-section-bottom-item-title">
                                Foolproof Installation
                            </div>
                            <div className="tech-section-bottom-item-description">
                                just like assembling IKEA desk!
                            </div>
                        </div>
                        <div className="tech-section-bottom-svg">
                            {/* <img src={aiEvovle} alt="ai growth" /> */}
                        </div>
                    </div>
                    <div className="tech-section-bottom-item tech-hardwares">
                        <div className="tech-section-bottom-item-header">
                            <div className="tech-section-bottom-item-title">
                                Durability
                            </div>
                            <div className="tech-section-bottom-item-description">
                                made by materials for longevity.
                            </div>
                        </div>
                        <div className="tech-section-bottom-svg">
                            <IoInfiniteSharp className='tech-section-icon'/>
                        </div>
                    </div>
                </div>
            </div>

            {/* hardware */}
            <div className="tech-section ">
                <div className="tech-section-title">
                    Software
                </div>
                <div className="tech-section-top tech-software">
                    <div className="tech-section-top-title">
                        Management Portal
                    </div>
                    <div className="tech-section-top-description">
                        real-time metrics and analytics
                    </div>
                    <div className="tech-section-top-svg">
                        <img src={softare1} alt="ai growth" />
                    </div>
                </div>
                <div className="tech-section-bottom">
                    <div className="tech-section-bottom-item tech-software">
                        <div className="tech-section-bottom-item-header">
                            <div className="tech-section-bottom-item-title">
                                Alert System
                            </div>
                            <div className="tech-section-bottom-item-description">
                                instant notifications for security breaches
                            </div>
                        </div>
                        <div className="tech-section-bottom-svg">
                            {/* <img src={aiEvovle} alt="ai growth" /> */}
                        </div>
                    </div>
                    <div className="tech-section-bottom-item tech-software">
                        <div className="tech-section-bottom-item-header">
                            <div className="tech-section-bottom-item-title">
                                Customization
                            </div>
                            <div className="tech-section-bottom-item-description">
                                adapts to diverse parking management needs.
                            </div>
                        </div>
                        <div className="tech-section-bottom-svg">
                            <MdDashboardCustomize className='tech-section-icon'/>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Technology;