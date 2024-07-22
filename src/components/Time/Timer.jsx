import React, { useEffect } from 'react';

const Timer = ({ isActive, time, setTime }) => {
    useEffect(() => {
        if (isActive && time > 0) {
            const timer = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [isActive, time, setTime]);

    return (
        <h5>Время: {Math.floor(time / 60)} м {time % 60} с</h5>
    );
};

export default Timer;
