import React from 'react';
import './ThirdSEC.css';
import book from '../../assets/img/image.png';
import location from '../../assets/img/location_on_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { axiosInstance } from "../../Utils/API/Api";
import ButtonMaterial from "../../components/Button/Button";
import { useForm } from "react-hook-form";

const ThirdSEC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance.post('/send-message', {
                message: data.phone
            });
            console.log(response.data);
        } catch (error) {
            console.error("There was an error!", error);
        }
    };


    const hoverForm = {
        backgroundColor: 'grey',
    }

    const styleForm = {
        width:'131px',
        height:'50px',
        backgroundColor: '#11AE04',
        borderRadius:'30px',
        color:'#fff',
        textTransform:'uppercase',
        fontSize:'22px',
        textAlign:'center',
        '@media screen and (max-width: 391px)' :{
            width: '50px',
            height: '20px',
            fontSize: '10px'
        }
    }

    return (
        <div className='third'>
            <div className='box'>
                <img src={book} className='book' alt="Book" />
                <div className="text">
                    <div className="instruct">
                        <h2>Методическое пособие:</h2>
                        <p>Методическое пособие по правилам дорожного движения<br/>
                            (пдд) с иллюстрациями и комментариями. методическое<br/> пособие составлено с дополнениями и
                            пояснениями к <br/>
                            <span>дорожным знакам и разметкам.</span> <br/><br/>При покупке оптом возможны скидки. за
                            более подробной <br/> информацией обращаться напрямую к Руслану <br/>
                            <span>Жакшылыковичу по телефону или WhatsApp</span> <br/><br/>Вы можете приобрести данное
                            пособие по адресу либо <br/> по звонку:</p>
                    </div>

                    <div className='codify'>

                        <div className="loc">
                            <img src={location} className='tag' alt="Location"/>
                            <a href="">Сухе Ботора 26/1</a>
                        </div>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="phone">
                                <input
                                    {...register('phone', {
                                        maxLength: {
                                            value: 15,
                                            message: 'Максимум 15 символов'
                                        }
                                    })}
                                    placeholder='Пишите номер'
                                    type="text"
                                    className='inForm'
                                />
                                {errors?.phone && (<div className='errors'>{errors.phone.message}</div>)}
                            </div>
                            <ButtonMaterial
                                onSubmit={onSubmit}
                                styles={styleForm}
                                hoverStyles={hoverForm}
                                value='купить'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdSEC;
