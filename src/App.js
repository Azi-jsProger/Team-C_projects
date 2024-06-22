import {React,useState,useEffect} from 'react';
import SecondSec from "./Sections/Second-Section/SecondSEC";
import FourthSec from "./Sections/Fourth-Section/FouthSEC";
import FirstSec from "./Sections/First-Section/FirstSEC";
import ThirdSec from './Sections/Third-Section/ThirdSEC'
import {axiosInstance} from "./Utils/API/Api";
import {ToastContainer} from "react-toastify";
import {showError, showSucsess} from "./Utils/alert/alert";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const getNews = async () => {
        setIsLoading(true)
       try {
           const res = await axiosInstance.get('/news');
           setNews(res.data);
           showSucsess('Успешно', 'данные пришли');
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
           }
       } finally {
           setIsLoading(false)
       }
    };

    useEffect(() => {
        getNews();
    }, []);

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
            />
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

