import React, { useEffect, useState } from 'react';
import './style.css';
import { axiosInstance } from "../../Utils/API/Api";
import ButtonMaterial from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import TestOverview from "../../components/TestOverview/TestOverview";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
    const [time, setTime] = useState(120);
    const [isActive, setIsActive] = useState(true);
    const [quiz, setQuiz] = useState({ questions: [] });
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
    const [isTestFinished, setIsTestFinished] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const maxAttempts = 2;

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
                state: { incorrectAnswersCount, questionCount: quiz.questions.length, elapsedTime: 120 - time,currentQuestionIndex },
            });
        } else if (isTestFinished) {
            navigate(`/passed`, {
                state: { incorrectAnswersCount, questionCount: quiz.questions.length, elapsedTime: 120 - time,currentQuestionIndex },
            });
        }
    }, [isTestFinished, incorrectAnswersCount, navigate, quiz.questions.length, time]);

    useEffect(() => {
        if (isActive && time > 0) {
            const timer = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timer);
        } else if (time === 0) {
            handleNextQuestion();
        }
    }, [isActive, time]);

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
                setAttempts(0); // сброс попыток при переходе к следующему вопросу
            } else {
                setIsTestFinished(true);
            }
        } else {
            alert("Выберите ответ перед переходом к следующему вопросу");
        }
    };

    const handleAnswerChange = (index) => {
        if (attempts < maxAttempts) {
            setSelectedAnswers([index]);
            setIsAnswered(true);
            setAttempts(attempts + 1);

            const isCorrectAnswer = quiz.questions[currentQuestionIndex].answers[index].correctly;
            setIsCorrect(isCorrectAnswer);
        } else {
            alert("Вы не можете выбрать больше ответов для этого вопроса.");
        }
    };

    if (!quiz.questions.length) {
        return <div className='loa-block'><Loading /></div>;
    }

    const hoverStyles = {
        backgroundColor: '#6B9548'
    };

    const currentQuestion = quiz.questions[currentQuestionIndex];

    return (
        <div className='testPage'>
            <div className="container">
                <div className="quiz-test">
                    <TestOverview
                        errorStyle={{ color: '#BB1919' }}
                        setTime={setTime}
                        time={time}
                        isActive={isActive}
                        questionCount={quiz.questions.length}
                        currentQuestionIndex={currentQuestionIndex + 1}
                        error={incorrectAnswersCount}
                    />
                    <div className="card-test">
                        <div className="question-container">
                            <div className="questions">
                                <h2 className='id'>{currentQuestion.id}.</h2>
                                <h2 className='question'>{currentQuestion.question}</h2>
                            </div>
                            {currentQuestion.image && (
                                <img className='quis-img' src={currentQuestion.image} alt={`Question ${currentQuestion.id}`} />
                            )}
                        </div>
                        <div className="anw-but">
                            <div className="answers">
                                {currentQuestion.answers.map((answer, idx) => (
                                    <div className='answers-div' key={idx}>
                                        <input
                                            type="radio"
                                            id={`answer-${currentQuestion.id}-${idx}`}
                                            name={`question-${currentQuestion.id}`}
                                            checked={selectedAnswers.includes(idx)}
                                            onChange={() => handleAnswerChange(idx)}
                                            disabled={attempts >= maxAttempts}
                                        />
                                        <label htmlFor={`answer-${currentQuestion.id}-${idx}`}>
                                            <h3>{answer.answer}</h3>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            {isAnswered && (
                                <div className="feedback">
                                    {isCorrect ? (
                                        <p style={{ color: 'green' }}>Правильный ответ!</p>
                                    ) : (
                                        <p style={{ color: 'red' }}>Неправильный ответ. {currentQuestion.explanation}</p>
                                    )}
                                </div>
                            )}
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
        </div>
    );
};

export default TestPage;
