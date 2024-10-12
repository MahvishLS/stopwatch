import React from 'react';

const Timer = ({ time }) => {
    
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = time % 1000;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
    };

    return (
        <div style={{ fontSize: '230px', fontFamily: 'sans-serif' }}>
            {formatTime(time)}
        </div>
    );
};

export default Timer;
