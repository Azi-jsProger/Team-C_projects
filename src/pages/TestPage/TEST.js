import React, {useEffect, useState} from 'react';
import './style.css';
import {axiosInstance} from "../../Utils/API/Api";
import ButtonMaterial from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import TestOverview from "../../components/TestOverview/TestOverview";
import {useNavigate} from "react-router-dom";
import FailedPage from "../FailedPage/failedPage";

const TestPage = () => {
    const [time, setTime] = useState(120);
    const [isActive, setIsActive] = useState(true);
    const [quiz, setQuiz] = useState({questions: []});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
    const [isTestFinished, setIsTestFinished] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getQuiz = async () => {
            const res = await axiosInstance('/test');
            setQuiz(res.data);
        };
        getQuiz();
    }, []);

    useEffect(() => {
        if (incorrectAnswersCount >= 2) {
            navigate(`/fail`, {
                state: {incorrectAnswersCount, questionCount: quiz.questions.length},
            });
        } else if (isTestFinished) {
            navigate(`/passed`, {
                state: {incorrectAnswersCount, questionCount: quiz.questions.length}
            });
        }
    }, [isTestFinished, incorrectAnswersCount, navigate, quiz.questions.length]);

    useEffect(() => {
        if (incorrectAnswersCount >= 2) {
            navigate(`/fail`, {
                state: {
                    incorrectAnswersCount, questionCount: quiz.questions.length, elapsedTime: 120 - time
                },
            });
        } else if (isTestFinished) {
            navigate(`/passed`, {
                state: {
                    incorrectAnswersCount, questionCount: quiz.questions.length, elapsedTime: 120 - time
                }
            });
        }
    }, [isTestFinished, incorrectAnswersCount, navigate, quiz.questions.length, time]);


    const handleNextQuestion = () => {
        if (selectedAnswers.length > 0) {
            if (!isCorrect) {
                setIncorrectAnswersCount(prevCount => prevCount + 1);
            }
            if (currentQuestionIndex < quiz.questions.length - 1) {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
                setSelectedAnswers([]);
                setIsAnswered(false);
                setIsCorrect(null);
                setTime(120);
            } else {
                setIsTestFinished(true);
            }
        } else {
            alert("Выберите ответ перед переходом к следующему вопросу");
        }
    };

    const handleAnswerChange = (index) => {
        setSelectedAnswers([index]);
        setIsAnswered(true);

        const isCorrectAnswer = quiz.questions[currentQuestionIndex].answers[index].correctly;
        setIsCorrect(isCorrectAnswer);
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
                    errorStyle={{color: '#BB1919'}}
                    setTime={setTime}
                    time={time}
                    isActive={isActive}
                    questionCount={quiz.questions.length}
                    error={incorrectAnswersCount}
                />


                <div className="card-test">
                    <div className="question-container">
                        <div className="questions">
                            <h2 className='id'>{currentQuestion.id}.</h2>
                            <h2 className='question'>{currentQuestion.question}</h2>
                        </div>
                        {currentQuestion.image && (<img className='quis-img' src={currentQuestion.image}
                                                        alt={`Question ${currentQuestion.id}`}/>)}
                    </div>

                    <div className="anw-but">
                        <div className="answers">
                            {currentQuestion.answers.map((answer, idx) => (<div className='answers-div' key={idx}>
                                <input
                                    type="radio"
                                    id={`answer-${currentQuestion.id}-${idx}`}
                                    name={`question-${currentQuestion.id}`}
                                    checked={selectedAnswers.includes(idx)}
                                    onChange={() => handleAnswerChange(idx)}
                                />
                                <label htmlFor={`answer-${currentQuestion.id}-${idx}`}>
                                    <h3>{answer.answer}</h3>
                                </label>
                            </div>))}
                        </div>
                        {isAnswered && (<div className="feedback">
                            {isCorrect ? (<p style={{color: 'green'}}>Правильный ответ!</p>) : (
                                <p style={{color: 'red'}}>Неправильный
                                    ответ. {currentQuestion.explanation}</p>)}
                        </div>)}
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
