import React from 'react';
import { useLocation } from 'react-router-dom';
import '../ResultStyles/style.css';
import TestOverview from "../../components/TestOverview/TestOverview";
import CardResult from "../../components/CardResult/CardResult";
import success from '../../assets/img/Smile.png';

const PassedPage = () => {
    const location = useLocation();
    const { questionCount, elapsedTime } = location.state || {};

    return (
        <div className='passed'>
            <div className="container">
                <div className="card-two">
                    <TestOverview
                        questionCount={questionCount}
                        error={0}
                        errorStyle={{ color: '#1C1B1F' }}
                    />
                    <CardResult
                        style={{ color: '#478E64' }}
                        error={0}
                        errorStyle={{ color: '#BB1919' }}
                        questionCount={questionCount}
                        img={success}
                        text={`Тест пройден! Время: ${Math.floor(elapsedTime / 60)} минут ${elapsedTime % 60} секунд`}
                    />
                </div>
            </div>
        </div>
    );
};

export default PassedPage;
