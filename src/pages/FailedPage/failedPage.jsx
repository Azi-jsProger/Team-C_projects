import React from 'react';
import { useLocation } from 'react-router-dom';
import '../ResultStyles/style.css';
import TestOverview from "../../components/TestOverview/TestOverview";
import CardResult from "../../components/CardResult/CardResult";
import fail from '../../assets/img/Frame.png';

const FailedPage = () => {
    const location = useLocation();
    const { incorrectAnswersCount, questionCount, elapsedTime } = location.state || {};

    return (
        <div className='Fail'>
            <div className="container">
                <div className="card-two">
                    <TestOverview
                        questionCount={questionCount}
                        error={incorrectAnswersCount}
                        errorStyle={{ color: '#1C1B1F' }}
                    />
                    <CardResult
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
    );
};

export default FailedPage;
