import React from 'react';
import './css/ControlButtons.css';

const ControlButtons = ({ isRunning, onStart, onPause, onReset, onSplit }) => {
    return (
        <div className="control-buttons">
            <button
                onClick={isRunning ? onPause : onStart}
                className={`button start-pause ${isRunning ? 'running' : ''}`}
            >
                {isRunning ? 'Pause' : 'Start'}
            </button>

            <button
                onClick={onSplit} 
                className="button split"
            >
                Split
            </button>

            <button
                onClick={onReset}
                className="button reset"
            >
                Reset
            </button>
        </div>
    );
};

export default ControlButtons;
