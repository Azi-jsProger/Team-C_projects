import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../ResultStyles/style.css';
import TestOverview from "../../components/TestOverview/TestOverview";
import CardResult from "../../components/CardResult/CardResult";
import fail from '../../assets/img/Frame.png';
import Loading from "../../components/Loading/Loading";
import styles from '../../Sections/Fourth-Section/style.module.css';

const FailedPage = () => {
    const location = useLocation();
    const { incorrectAnswersCount, questionCount, elapsedTime,currentQuestionIndex } = location.state || {};
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        isLoading ? (
            <div className={styles.loa}>
                <Loading />
            </div>
        ) : (
            <div className='Fail'>
                <div className="container">
                    <div className="card-two">
                        <TestOverview
                            currentQuestionIndex={currentQuestionIndex}
                            questionCount={questionCount}
                            error={incorrectAnswersCount}
                            errorStyle={{ color: '#1C1B1F' }}
                            text={`${Math.floor(elapsedTime / 60)} м ${elapsedTime % 60} с`}
                        />
                        <CardResult
                            currentQuestionIndex={currentQuestionIndex}
                            style={{ color: '#A55454' }}
                            error={incorrectAnswersCount}
                            questionCount={questionCount}
                            errorStyle={{ color: '#BB1919' }}
                            img={fail}
                            text={`${Math.floor(elapsedTime / 60)} м ${elapsedTime % 60} с`}
                        />
                    </div>
                </div>
            </div>
        )
    );
};

export default FailedPage;
