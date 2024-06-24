import React from 'react';
import './style.css'
import inst from '../../assets/img/instagram.png'
import whats from '../../assets/img/whatsapp.png'
import telegramm from '../../assets/img/Telegram.png'
import tel from '../../assets/img/PhoneWhite.png'

const Footer = () => {
    return (


        <footer>



                <div className="container">
                    <div className='foot'>
                    <div className="a-inst">
                        <a href='https://www.instagram.com/lets_codify?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'>
                            <img src={inst} alt=""/>
                        </a>
                        <a href={null}>
                            <img src={whats} alt=""/>
                        </a>
                        <a href={null}>
                            <img src={telegramm} alt=""/>
                        </a>
                    </div>

                    <h1>Жакшы жол</h1>

                    <div className="tel-phone">

                        <div className="nom">
                            <img src={tel} alt=""/>
                            <a href="tel: +996 0552 209 809">0552 209 809</a>
                        </div>

                        <a className='num-2' href="tel:0552 209 809">0552 209 809</a>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;