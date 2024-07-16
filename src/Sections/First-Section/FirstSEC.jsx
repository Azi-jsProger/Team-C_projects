import React from 'react';
import Header from "../../components/Header/Header";
import './style.css';
import car from '../../assets/img/Group 97.png';
import whatsapp from '../../assets/img/whatsapp.png';
import tel from '../../assets/img/Phone.png';
import ButtonMaterial from "../../components/Button/Button";
import time from '../../assets/img/Time.png';
import mail from '../../assets/img/Mail.png';
import {motion} from "framer-motion";

const FirstSec = (props) => {

    const {
        headID
    } = props

    const styles = {
        width: '164px',
        height: '44px',
        borderRadius: '100px',
        backgroundColor: '#7DA658',
        color: '#fff',
        gap: '10px',
        fontSize: '14px',
        textTransform: 'capitalize',
        '@media screen and (max-width: 391px)': {
            border: '1px solid #fff'
        }
    }

    const stylePhone = {
        backgroundColor: 'transparent',
        width: '157px',
        height: '45px',
        textAlign: 'center',
        border: 'none',
        borderBottom: '1px solid black',
        boxShadow: 'none',
        gap: '10px',
        color: 'black',
        fontWeight: '500',
        fontSize: '12.5px',
        '@media screen and (max-width: 391px)': {
            color: '#fff', borderBottom: '1px solid #fff'
        }
    }

    const hoverWhatsapp = {
        backgroundColor: '#6B9548',
    };

    const hoverPhone = {
        backgroundColor: 'grey',
    }

    return (<div className='app'>
        <Header
            id={headID}
        />
        <div className="container">
            <div className="first">
                <div className='cot'>
                    <div className="main">
                        <h1>Персональные уроки по <br/> вождению</h1>
                        <p className='study'>Практические задания дают 80% в <br/> обучении. Обучайте правильно и
                            выгодно!
                        </p>
                        <p className='zvon'>Получите полную консультацию по звонку!</p>
                        <div className='contac'>
                            <a href="https://web.whatsapp.com/0552 209 809" target='_blank'
                               rel="noopener noreferrer">
                                <ButtonMaterial
                                    img={whatsapp}
                                    value={'WhatsApp'}
                                    styles={styles}
                                    hoverStyles={{backgroundColor: '#6B9548'}}
                                />


                            </a>

                            <a href="tel:+9960552209809">
                                <ButtonMaterial
                                    img={tel}
                                    value={'0552 209 809'}
                                    styles={stylePhone}
                                    hoverStyles={hoverPhone}
                                />
                            </a>
                        </div>
                    </div>

                    <motion.div
                        initial={{opacity: 0, scale: 0.8, x: -200}}
                        animate={{opacity: 1, scale: 1, x: 0}}
                        transition={{duration: 0.7}}
                        className='work'>
                        <div className="grafic">
                            <img src={time} alt="Time"/>
                            <p>График работы</p>
                        </div>
                        <h4>ПН-ВС; 09:00-18:00</h4>
                    </motion.div>
                </div>
                <div className='car-image'>
                    <motion.img
                        initial={{opacity: 0, x: 150}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        className='car' src={car} alt="Car"
                    />
                    <motion.div
                        initial={{opacity: 0, scale: 0.8, x: 200}}
                        animate={{opacity: 1, scale: 1, x: 0}}
                        transition={{duration: 0.7}}
                        className="gmail">
                        <img className='mail-img' src={mail} alt="Mail"/>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ruslanjakshylykov@gmail.com"
                           target='_blank' rel="noopener noreferrer">ruslanjakshylykov@gmail.com</a>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>);
};

export default FirstSec;
