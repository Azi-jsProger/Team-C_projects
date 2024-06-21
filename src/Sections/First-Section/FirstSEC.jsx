import React from 'react';
import Header from "../../components/Header/Header";
import './style.css'
import car from '../../assets/img/Group 97.png'
import whatsapp from '../../assets/img/whatsapp.png'
import tel from '../../assets/img/Phone.png'
import ButtonMaterial from "../../components/Button/Button";
import time from '../../assets/img/Time.png'
import mail from '../../assets/img/Mail.png'

const FirstSec = () => {
    const styles = {
        width: '164px',
        height: '44px',
        borderRadius: '100px',
        backgroundColor: '#7DA658',
        gap: '10px',
    }

   const stylePhone= {
        backgroundColor: 'transparent',
        width: '157px',
       height: '45px',
       textAlign:'center',
       border:'none',
       borderBottom:'1px solid black',
       boxShadow:'none',
       gap: '10px',
       color:'black',
       fontWeight:'500',
       fontSize:'14px',

    }

    const hoverWhatsapp = {
        backgroundColor: '#6B9548', // Change to desired hover background color
    };

    const hoverPhone = {
        backgroundColor: 'grey'
    }

    return (
        <div className='app'>
            <Header></Header>
            <div className="container">
                <div className="first">
                    <div className='cot'>
                        <div className="main">
                            <h1>Персональные уроки по <br/> вождению</h1>
                            <p className='study'>Практические задания дают 80% в <br/> обучении.Обучайте правильно и
                                выгодно
                            </p>
                            <p className='zvon'>Получите полную кансультацию по звонку</p>
                            <div className='contac'>
                                <a href="https://web.whatsapp.com/0552 209 809" target='_blank'>
                                    <ButtonMaterial
                                        img={whatsapp}
                                        value={'WhatsApp'}
                                        styles={styles}
                                        hoverStyles={hoverWhatsapp}
                                    />
                                </a>

                                <a href="tel: +996 0552 209 809 ">
                                    <ButtonMaterial
                                        img={tel}
                                        value={'0552 209 809'}
                                        styles={stylePhone}
                                        hoverStyles={hoverPhone}
                                    />
                                </a>

                            </div>
                        </div>

                        <div className='work'>
                            <div className="grafic">
                                <img src={time} alt=""/>
                                <p>График работы</p>
                            </div>
                            <h4>ПН-ВС;09:00-18:00</h4>
                        </div>
                    </div>
                    <div className='car-image'>
                        <img className='car' src={car} alt='Car'/>
                        <div className="gmail">
                            <img src={mail} alt=""/>
                            <a href="https://mail.google.com/mail/u/0/?pli=1#sent?compose=CllgCJZbjQwPchDlhfngHSVJlfhlwpjGsSxJXtpgWLwptrfwPqfhjnnJzCCwdDshVQfHMhRmTbq" target='_blank'>ruslanjakshylykov@gmail.com</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FirstSec;