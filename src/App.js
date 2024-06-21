import React, {useEffect, useState} from 'react';
import {axiosInstance} from "./Utils/API/Api";
import SecondSec from "./Sections/Second-Section/SecondSEC";
import FourthSec from "./Sections/Fourth-Section/FouthSEC";


const App = () => {
    const [news, setNews] = useState([]);

    const getNews = async () => {
        const res = await axiosInstance.get('/news');
        setNews(res.data);
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div>
            <SecondSec />
            <FourthSec
                news={news}
            />
        </div>
    );
};

export default App;
