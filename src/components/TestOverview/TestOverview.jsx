import React from 'react';
import Timer from "../Time/Timer";

const TestOverview = (props) => {

    const {
        isActive,
        time,
        setTime
    } = props

    return (
        <div className="nav-test">
                <h5 className='time'>Билет 1</h5>
                <div className="quiz-stats">
                    <Timer isActive={isActive} time={time} setTime={setTime}/>
                </div>
        </div>
    );
};

export default TestOverview;