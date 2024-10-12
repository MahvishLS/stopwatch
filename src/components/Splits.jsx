import React from 'react';
import './css/Splits.css'; 

const Splits = ({ splits }) => {
    // Helper function to format the time in hh:mm:ss:msms
    const formatSplitTime = (time) => {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = time % 1000;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
    };

    return (
        <div className="splits-container">
            {splits.length > 0 && <h3>Splits</h3>}
            {splits.map((split, index) => {
                const previousSplit = index > 0 ? splits[index - 1] : 0;
                const splitDifference = split - previousSplit;

                return (
                    <div key={index} className="split-item">
                        <span className="split-number">#{index + 1}</span>
                        <span className="split-time">Time: {formatSplitTime(split)}</span>
                        <span className="split-difference">+{formatSplitTime(splitDifference)}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Splits;
