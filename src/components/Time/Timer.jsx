import React, { useEffect } from 'react';
import './style.css'

const Timer = ({ isActive, time, setTime }) => {
    useEffect(() => {
        let timer;
        if (isActive && time > 0) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isActive, time, setTime]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return (
        <div>
            <h5 className='time'><span>Время:</span> {formatTime(time)}</h5>
        </div>
    );
};

export default Timer;
