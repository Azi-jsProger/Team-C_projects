import React, {useState} from 'react';
import traffic from "../../assets/img/traffic-light.png";
import cart from "../../assets/img/Group 33.png";
import whatsaap from "../../assets/img/whatsapp.png";
import './style.css'
import ButtonMaterial from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import hand from '../../assets/img/Group 34.png'
import {showSucsess} from "../../Utils/alert/alert";
import {useNavigate} from "react-router-dom";

const FifthSec = ({id, headID}) => {
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);
    const [timerActive, setTimerActive] = useState(false);

    const startTimer = () => {
        setIsActive(true);
        setTimerActive(true);
    };

    const stylesCard = {
        width: '158px',
        height: '45px',
        backgroundColor: '#fff',
        color: '#111',
        fontWeight: '700',
        borderRadius: '50px',
        fontSize: '15px'
    };

    const hoverCard = {
        backgroundColor: 'grey',
    };

    const switchTest = () => {
        navigate(`/test`);
    };

    const alertMessage = async () => {
        await showSucsess('Удачи', 'с тестом');
    };

    const handleButtonClick = async () => {
        await alertMessage();
        await startTimer();
        await switchTest();
        await setIsActive(true);
    };

    return (<section className="fif">
        <div className="container">
            <div className="text-fif">
                <div className="f-text">
                    <h1>Жакшы Жол</h1>
                    <p>Научитесь водить правильно и безопасно вместе с опытным <br/>
                        инструктором по вождению</p>
                </div>
                <div className="trafic">
                    <img src={traffic} alt=""/>
                </div>
            </div>

            <div className="cards">
                <img src={cart} alt=""/>
                <div className="cards-text">
                    <h3 className='h3-cards1'>Практическое вождение авто с инструктором:</h3>
                    <p className='bot-what'>Автошкола «Жакшы - Жол», этот проект для всех жителей Бишкека. Автошкола
                        Бишкека обучают
                        вождению по категориям “B”. Если у вас есть права, но нет практики, наш инструктор поможет
                        вам с практикой. Первые уроки будут с инструктором на его машине Honda Jazz
                        (коробка автомат). </p>
                    <div className='CardLink'>
                        <p>Стоимость практики можно узнать у инструктора по телефону или по </p>
                        <a href='https://wa.me/+996552209809' target='_blank'><img src={whatsaap} alt=""/> WhatsApp</a>
                    </div>
                </div>
            </div>

            <div className="cards cards-2">
                <img src={hand} alt=""/>
                <div className="cards-text">
                    <h3 className='h3-cards'>Пройти пробный тест</h3>
                    <p className='bot-but'>Проверьте свои знания ПДД вместе с нами. Вам дается 25 минут чтобы
                        ответить на 20 вопросов с иллюстрациями и вариантами ответов, узнайте уровень ваших знаний
                        ПДД</p>
                    <div className='but-cards' id={id}>
                        <ButtonMaterial
                            onSubmit={handleButtonClick}
                            isActive={isActive}
                            startTimer={startTimer}
                            value='Пройти Тест!'
                            styles={stylesCard}
                            hoverStyles={hoverCard}
                        />
                    </div>
                </div>
            </div>
        </div>
        <Footer headID={headID}/>
    </section>);
};

export default FifthSec;
