import React, { useRef } from 'react';

// css
import '../css/Stats.css';

// effect hook
import useSequentialEffect from '../hooks/useSequentialEffect';


const Stats = () => {

    // sequential effect
    const statsRef = useRef(null);
    useSequentialEffect(statsRef, '.stats-item', 100);

    return (
        <div className='stats' ref={statsRef}>
            <div className="stats-item">
                <div className="stats-item-title">
                    35%
                </div>
                <div className="stats-item-description">
                    cost savings per year
                </div>
            </div>
            <div className="stats-item">
                <div className="stats-item-title">
                    85%
                </div>
                <div className="stats-item-description">
                    time saved on investigation
                </div>
            </div>
            <div className="stats-item">
                <div className="stats-item-title">
                    20%
                </div>
                <div className="stats-item-description">
                    increase in compliance
                </div>
            </div>
        </div>
    );
};

export default Stats;