import React from 'react';
import Timer from "../Time/Timer";
import '../../pages/TestPage/style.css';

const TestOverview = (props) => {
    const {isActive, time, setTime, question, questionCount, error, errorStyle} = props;

    return (<div className="nav-test">
        <h5 className='time'>Билет 1</h5>
        <div className="quiz-stats">
            <h5 style={errorStyle}>Ошибки: {error}/2</h5>
            <h5>Вопрос {questionCount - error}/{questionCount}</h5>
            <Timer isActive={isActive} time={time} setTime={setTime}/>
        </div>
    </div>);
};

export default TestOverview;
