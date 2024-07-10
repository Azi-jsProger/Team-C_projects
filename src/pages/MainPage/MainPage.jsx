import React, {useCallback, useEffect, useState} from 'react';
import FirstSec from "../../Sections/First-Section/FirstSEC";
import SecondSec from "../../Sections/Second-Section/SecondSEC";
import ThirdSec from "../../Sections/Third-Section/ThirdSEC";
import FourthSec from "../../Sections/Fourth-Section/FouthSEC";
import FifthSec from "../../Sections/Fifth-Section/FifthSEC";
import {ToastContainer} from "react-toastify";
import {axiosInstance} from "../../Utils/API/Api";
import {showError, showSucsess} from "../../Utils/alert/alert";

const MainPage = (props) => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getNews = useCallback(async () => {
        setIsLoading(true);
        setError(null);
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
            <FirstSec
                headID='headID'
            />
            <SecondSec
                id='second-section'
            />
            <ThirdSec
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                id='third-section'
            />
            <FourthSec
                news={news}
                isLoading={isLoading}
                getNews={getNews}
                error={error}
                id='fourth-section'
            />
            <FifthSec
                id='fifth-section'
                headID='headID'
            />
        </div>
    );
};

export default MainPage;