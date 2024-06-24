import React, { useState, useEffect, useCallback } from 'react';
import SecondSec from "./Sections/Second-Section/SecondSEC";
import FourthSec from "./Sections/Fourth-Section/FouthSEC";
import FirstSec from "./Sections/First-Section/FirstSEC";
import ThirdSec from './Sections/Third-Section/ThirdSEC';
import { axiosInstance } from "./Utils/API/Api";
import { ToastContainer } from "react-toastify";
import { showError, showSucsess } from "./Utils/alert/alert";
import 'react-toastify/dist/ReactToastify.css';
import FifthSec from "./Sections/Fifth-Section/FifthSEC";

const App = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getNews = useCallback(async () => {
        setIsLoading(true);
        setError(null);  // Сброс ошибки перед началом запроса

        try {
            const res = await axiosInstance.get('/news');
            setNews(res.data);
            showSucsess('Успешно', 'данные пришли');
        } catch (e) {
            let errorMessage = 'server is temporarily unavailable';
            if (e?.response?.status === 404) {
                errorMessage = 'Связь с сервером установлена, но данных по заданному запросу на сервере нет!';
            } else if (e?.response?.status === 403) {
                errorMessage = 'Нет прав на просмотр';
            } else if (e?.response?.status === 401) {
                errorMessage = 'Вы не авторизованы';
            } else if (e?.response?.status === 400) {
                errorMessage = 'Неправильный запрос';
            }
            showError(errorMessage);
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getNews();
    }, [getNews]);

    return (
        <div>
            <FirstSec />
            <SecondSec />
            <ThirdSec
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
            <FourthSec
                news={news}
                isLoading={isLoading}
                getNews={getNews}
                error={error}
            />
            <FifthSec />
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default App;
