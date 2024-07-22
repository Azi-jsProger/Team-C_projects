import React, {useState} from 'react';
import './style.css'
import ButtonMaterial from "../Button/Button";
import home from '../../assets/img/home.png'
import reset from '../../assets/img/reset.png'
import test from '../../assets/img/test.png'
import {useNavigate} from "react-router-dom";

const CardResult = (props) => {


    const {
        img, text, time, style, errorStyle, error, questionCount,currentQuestionIndex
    } = props

    const navigate = useNavigate();

    function redirecToMain() {
        navigate(`/`)
    }

    function redirecToTestReset() {
        navigate(`/test`)
    }

    function redirecToMoreTest() {
        navigate(null)
    }



    return (<div className='card-result'>
        <div className="fail-img">
            <img src={img} alt=""/>
            <h3 style={style}>Тест не пройден!</h3>
        </div>

        <div style={style} className="result-test">
            <h4>Билет 1</h4>
            <h4>Время {text}</h4>
            <h4>Вопросы {currentQuestionIndex}/{questionCount}</h4>
            <h4 style={errorStyle}>Ошибки {error}/2</h4>
        </div>

        <div className="buts">
            <ButtonMaterial
                value='на главную '
                onSubmit={redirecToMain}
                hoverStyles={{backgroundColor: '#4287f5'}}
                img={home}
                styles={{
                    height: '6vh',
                    borderRadius: '10px',
                    fontSize: '1.8vh',
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    gap: '11px',
                    textTransform: 'capitalize',
                    fontWeight: '600',
                    backgroundColor: '#2566B1'
                }}
            />
            <ButtonMaterial
                value='повторить'
                onSubmit={redirecToTestReset}
                img={reset}
                hoverStyles={{backgroundColor: '#3cbfae'}}
                styles={{
                    height: '6vh',
                    borderRadius: '10px',
                    fontSize: '1.8vh',
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    gap: '11px',
                    textTransform: 'capitalize',
                    fontWeight: '600',
                    backgroundColor: '#2A9D8F'
                }}
            />
            <ButtonMaterial
                value='больше теста'
                img={test}
                onSubmit={redirecToMoreTest}
                hoverStyles={{backgroundColor: '#67b886'}}
                styles={{
                    height: '6vh',
                    fontSize: '1.8vh',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    gap: '11px',
                    textTransform: 'capitalize',
                    fontWeight: '600',
                    backgroundColor: '#478E64'
                }}
            />
        </div>
    </div>);
};

export default CardResult;