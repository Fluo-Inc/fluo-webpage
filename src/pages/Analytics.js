import React, { useRef } from 'react';

// css
import "../css/Analytics.css";

// assets
import analyticsBanner from '../assets/analytics/analyticsBanner.svg';

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
            
        </div>
    );
};

export default Analytics;