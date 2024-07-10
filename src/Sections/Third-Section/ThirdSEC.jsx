import React, {useState} from 'react';
import './ThirdSEC.css';
import book from '../../assets/img/image.png';
import location from '../../assets/img/location_on_24dp_FILL0_wght400_GRAD0_opsz24.png';
import { axiosInstance } from "../../Utils/API/Api";
import ButtonMaterial from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import {showError, showSucsess} from "../../Utils/alert/alert";
import Loading from "../../components/Loading/Loading";
import {motion} from "framer-motion";

const ThirdSEC = (props) => {

    const {
        isLoading,
        setIsLoading,
        id
    }  = props


    const [clear, setClear] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        props.setIsLoading(true)
        try {
            const response = await axiosInstance.post('/send-message', {
                message: data.phone
            });
            console.log(response.data);
            showSucsess('Успешно','успешно')
        } catch (e) {
            if (e?.res?.status === 404) {
                showError('Связь с сервером установлена, но данных по заданному запросу на сервере нет')
            } else if (e?.response?.status === 403) {
                showError('Нет прав на просмотр')
            } else if (e?.response?.status === 401) {
                showError('Вы не авторизованы')
            } else if (e?.response?.status === 400) {
                showError('Неправильный запрос')
            } else {
                showError('server is temporarily unavailable')
                setClear('')
            }
        } finally {
            props.setIsLoading(false)

        }
    };

    const hoverForm = {
        backgroundColor: '#109d02',
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

            <section className="third" id={id}>


            <div className='box'>
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={book} className='book' alt="Book" />
                <div className="text-in">
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
                            <a href="https://maps.app.goo.gl/1NBQfEnbYmDCu71c7" target='_blank'>Сухе Ботора 26/1</a>
                        </div>

                        {props.isLoading ?
                            <div className='loa-third'>
                                <Loading />
                            </div>

                            :
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="phone">
                                    <input
                                        {...register('phone', {
                                            maxLength: {
                                                value: 17,
                                                message: 'Максимум 17 символов'
                                            }
                                        })}
                                        placeholder='Пишите номер'
                                        type="text"
                                        className='inForm'
                                        onChange={(e) => setClear(e.target.value)}
                                        value={clear}
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
                        }
                    </div>
                </div>
            </div>
            </section>

    );
};

export default ThirdSEC;
