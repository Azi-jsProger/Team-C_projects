import React, {useEffect, useState} from 'react';
import {axiosInstance} from "./Utils/API/Api";
import SecondSec from "./Sections/Second-Section/SecondSEC";
import FourthSec from "./Sections/Fourth-Section/FouthSEC";
import ButtonMaterial from "./components/Button/Button";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import FirstSec from "./Sections/First-Section/FirstSEC";


const App = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const getNews = async () => {
        setIsLoading(true)
       try {
           const res = await axiosInstance.get('/news');
           setNews(res.data);
       } catch (e) {
           console.log(e)
       } finally {
           setIsLoading(false)
       }
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div>
            <FirstSec></FirstSec>
            <SecondSec></SecondSec>

        </div>
    );
};

export default App;
