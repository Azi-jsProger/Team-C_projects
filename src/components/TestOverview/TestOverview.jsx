import React from 'react';
import Timer from "../Time/Timer";
import '../../pages/TestPage/style.css';

const TestOverview = (props) => {
    const { isActive, time, setTime, questionCount, currentQuestionIndex, error, errorStyle, text, } = props;

    return (
        <div className="nav-test">
            <h5 className='time'>Билет 1</h5>
            <div className="quiz-stats">
                <h5 style={errorStyle}>Ошибки: {error}/2</h5>
                <h5>Вопрос {currentQuestionIndex}/{questionCount}</h5>
                <Timer text={text} isActive={isActive} time={time} setTime={setTime} />
            </div>
        </div>
    );
};

export default TestOverview;
