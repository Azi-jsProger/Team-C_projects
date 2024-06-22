import React from 'react';
import './ThirdSEC.css';
import book from '../../assets/img/image.png'
import location from '../../assets/img/location_on_24dp_FILL0_wght400_GRAD0_opsz24.png'

const ThirdSEC = () => {
    return (
        <div className='third'>
            <div className='box'>
            <img src={book} className='book'/>

                <div className="text">
                    <h2>Методическое пособие:</h2>
                    <p>Методическое пособие по правилам дорожного движения<br />
                        (пдд) с иллюстрациями и комментариями . методическое<br /> пособие составлено с дополнениями и пояснениями к <br />
                        <span>дорожным знакам и разметкам.</span> <br /> <br />При покупке оптом возможны скидки. за более подробной <br /> информацией обращаться напрямую к Руслану <br />
                        <span>Жакшылыковичу по телефону или WhatsApp</span> <br /> <br />Вы можете приобрести данное пособие по адресу либо <br /> по звонку:</p>
                        <div className='codify'>
                        <img src={location} className='tag'/>
                            <a className='tag' href="https://go.2gis.com/3mih2">Сухе Ботора 26/1</a>
                            <input type="tel" maxLength={16} className='tel'/>
                            <button>КУПИТЬ</button>
                        </div>
                </div>
            </div>
        </div>

    );
};




export default ThirdSEC;