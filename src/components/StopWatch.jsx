import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import ControlButtons from './ControlButtons';
import Splits from './Splits';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [splits, setSplits] = useState([]);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const handleStart = () => setIsRunning(true);
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setSplits([]);
    };
    const handleSplit = () => {
        setSplits([...splits, time]);
    };

    return (
        <div style={{padding: "0 20px"}}>
            <Timer time={time} />
            <ControlButtons
                isRunning={isRunning}
                onStart={handleStart}
                onPause={handlePause}
                onReset={handleReset}
                onSplit={handleSplit}
            />
            <Splits splits={splits} />
        </div>
    );
};

export default Stopwatch;
