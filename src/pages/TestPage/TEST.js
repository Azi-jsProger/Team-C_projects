import React, {useEffect, useState} from 'react';
import Timer from "../../components/Time/Timer";
import './style.css'
import {axiosInstance} from "../../Utils/API/Api";
import ButtonMaterial from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import TestOverview from "../../components/TestOverview/TestOverview";

const TestPage = () => {
    const [time, setTime] = useState(120);
    const [isActive, setIsActive] = useState(true);
    const [quiz, setQuiz] = useState({questions: []});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const getQuiz = async () => {
        const res = await axiosInstance('/test');
        setQuiz(res.data);
    }

    useEffect(() => {
        getQuiz();
    }, []);

    const handleNextQuestion = () => {
        if (selectedAnswer !== null) {
            if (currentQuestionIndex < quiz.questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null);
                setIsAnswered(false);
                setTime(120);
            } else {
                alert("Тест завершен");
            }
        } else {
            alert("Выберите ответ перед переходом к следующему вопросу");
        }
    };

    const handleAnswerChange = (index) => {
        setSelectedAnswer(index);
        setIsAnswered(true);
    };

    if (!quiz.questions.length) {
        return <div className='loa-block'><Loading/></div>;
    }

    const hoverStyles = {
        backgroundColor: '#6B9548'
    }

    const currentQuestion = quiz.questions[currentQuestionIndex];

    return (<div className='testPage'>
        <div className="container">
            <div className="quiz-test">

                <TestOverview
                    setTime={setTime}
                    time={time}
                    isActive={isActive}
                />

                <div className="card-test">
                    <div className="question-container">
                        <div className="questions">
                            <h2 className='id'>{currentQuestion.id}.</h2>
                            <h2 className='question'>{currentQuestion.question}</h2>
                        </div>
                        <img className='quis-img' src={currentQuestion.image} alt={`Question ${currentQuestion.id}`}/>
                    </div>

                    <div className="anw-but">
                        <div className="answers">
                            {currentQuestion.answers.map((answer, idx) => (<div className='answers-div' key={idx}>
                                <input
                                    type="radio"
                                    id={`answer-${currentQuestion.id}-${idx}`}
                                    name={`question-${currentQuestion.id}`}
                                    checked={selectedAnswer === idx}
                                    onChange={() => handleAnswerChange(idx)}
                                />
                                <label htmlFor={`answer-${currentQuestion.id}-${idx}`}>
                                    <h3>{answer.answer}</h3>
                                </label>
                            </div>))}
                        </div>
                        <ButtonMaterial
                            styles={{
                                margin: '0 auto',
                                backgroundColor: '#7DA658',
                                fontSize: '15px',
                                borderRadius: '20px',
                                width: '158px',
                                height: '45px'
                            }}
                            value="Отправить"
                            onSubmit={handleNextQuestion}
                            disabled={!isAnswered}
                            hoverStyles={hoverStyles}
                        />
                    </div>

                </div>
            </div>
        </div>
    </div>);
};

export default TestPage;
