import React from 'react';

// css
import "../css/Detection.css";

// assets
import detectionBanner from '../assets/detection/detectionBanner.svg';
import unauthorizedVehicle from '../assets/detection/unauthorizedVehicle.svg';
import peopleOfInterest from '../assets/detection/peopleOfInterest.svg';
import anomalousEvent from '../assets/detection/anomalousEvent.svg';

const Detection = () => {
    return (
        <div className='detection'>
            {/* header */}
            <div className="detection-header">
                <div className="detection-header-title">
                    Real-time incidents detection
                </div>
                <div className="detection-header-description">
                    Enhance your property's safety with our state-of-the-art 
                    AI-powered incident detection system. 
                </div>
                <div className="detection-header-banner">
                    <img src={detectionBanner} alt="detection banner" />
                </div>
            </div>

            {/* features */}
            <div className="detection-feature">
                <div className="detection-feature-item">
                    <div className="detection-feature-item-img">
                        <img src={unauthorizedVehicle} alt="unauthorized vehicle" />
                    </div>
                    <div className="detection-feature-item-text">
                        <div className="detection-feature-item-title">
                            Unauthorized Vehicle
                        </div>
                        <div className="detection-feature-item-description">
                            Fluo vision camera is programmed to instantly identify
                            vehicles not authorized for entry into your property, 
                            alerting security personnel in real-time.
                        </div>
                    </div>
                </div>
                <div className="detection-feature-item">
                    <div className="detection-feature-item-img">
                        <img src={peopleOfInterest} alt="people of interest" />
                    </div>
                    <div className="detection-feature-item-text">
                        <div className="detection-feature-item-title">
                            People of Interest
                        </div>
                        <div className="detection-feature-item-description">
                            With human anlaytics AI, Fluo vision system promptly identifies 
                            suspicious individuals, enabling swift action by security guards.
                        </div>
                    </div>
                </div>
                <div className="detection-feature-item">
                    <div className="detection-feature-item-img">
                        <img src={anomalousEvent} alt="people of interest" />
                    </div>
                    <div className="detection-feature-item-text">
                        <div className="detection-feature-item-title">
                            Anomalous Event
                        </div>
                        <div className="detection-feature-item-description">
                            Equipped with even-driven model, our vision camera detects 
                            and alerts authorities to threatening situations such as fighting, theft, 
                            or attempted break-ins, enhancing overall security measures within your property.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detection;