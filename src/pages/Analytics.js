import React, { useRef } from 'react';

// css
import "../css/Analytics.css";

// assets
import analyticsBanner from '../assets/analytics/analyticsBanner.svg';
import trafficImg from '../assets/analytics/traffic.svg';
import occupancyImg from '../assets/analytics/occupancy.svg';
import securityImg from '../assets/analytics/security.svg';

// effect
import useSequentialEffect from '../hooks/useSequentialEffect';

const Analytics = () => {

     // sequential effect ========================================== 
     const headerRef = useRef(null);
     useSequentialEffect(headerRef, '.analytics-header-item', 100);


    return (
        <div className='analytics'>
             {/* header */}
             <div className="analytics-header" ref={headerRef}>
                <div className="analytics-header-title analytics-header-item">
                    Data-driven Insights
                </div>
                <div className="analytics-header-description analytics-header-item">
                    Transform your parking data into actionable insights, 
                    driving smarter decisions and increase property occupancy.
                </div>
                <div className="analytics-header-banner analytics-header-item">
                    <img src={analyticsBanner} alt="analytics banner" />
                </div>
            </div>

            {/* features */}
            <div className="analytics-feature">
                <div className="analytics-feature-item">
                    <div className="analytics-feature-item-img">
                        <img src={trafficImg} alt="unauthorized vehicle" />
                    </div>
                    <div className="analytics-feature-item-text">
                        <div className="analytics-feature-item-title">
                            Traffic Analytics
                        </div>
                        <div className="analytics-feature-item-description">
                            Fluo’s Traffic Analytics provides a detailed understanding of vehicle 
                            movements within your property. By analyzing traffic flow patterns, property managers can enhance 
                            safety protocols during peak traffic hours, design better routes within the 
                            parking areas to reduce potential accidents, and optimize signage for clearer navigation. 
                        </div>
                        <div className="analytics-feature-item-description">
                            This insight also assists in planning for future infrastructure improvements 
                            and enforcing parking rules more effectively to ensure a smoother and safer 
                            environment for all residents.
                        </div>
                        
                    </div>
                </div>
                <div className="analytics-feature-item">
                    <div className="analytics-feature-item-img">
                        <img src={occupancyImg} alt="people of interest" />
                    </div>
                    <div className="analytics-feature-item-text">
                        <div className="analytics-feature-item-title">
                            Occupancy Prediction
                        </div>
                        <div className="analytics-feature-item-description">
                            Fluo’s Occupancy Prediction feature transforms parking availability forecasts into 
                            actionable strategies that benefit both apartment managers and residents. By leveraging 
                            predictions to schedule community events when occupancy is high, this tool ensures maximum 
                            resident participation and engagement. It also enables strategic planning for infrastructure 
                            enhancements, allowing managers to make informed decisions about expanding or improving parking 
                            facilities based on long-term occupancy trends.
                        </div>
                        <div className="analytics-feature-item-description">
                            Additionally, this predictive capability helps optimize resource allocation, 
                            aligning staff and security deployment with anticipated occupancy levels. 
                            This not only improves operational efficiency and reduces costs but also bolsters 
                            security during peak periods, enhancing overall resident satisfaction and safety.
                        </div>
                    </div>
                </div>
                <div className="analytics-feature-item">
                    <div className="analytics-feature-item-img">
                        <img src={securityImg} alt="people of interest" />
                    </div>
                    <div className="analytics-feature-item-text">
                        <div className="analytics-feature-item-title">
                            Security Rating
                        </div>
                        <div className="analytics-feature-item-description">
                            Fluo's Security Rating is designed to evaluate the effectiveness 
                            of your security protocols by tracking and analyzing incidents within 
                            your parking areas. This feature assesses the frequency of unauthorized 
                            vehicle entries, break-ins, and unauthorized access, such as homeless or 
                            suspicious individuals.
                        </div>
                        <div className="analytics-feature-item-description">
                            By providing a clear, quantifiable rating based on these incidents, 
                            property managers can identify security vulnerabilities and enhance 
                            measures accordingly. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;