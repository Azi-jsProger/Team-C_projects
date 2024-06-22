import React, {useEffect} from 'react';
import {axiosInstance} from "./Utils/API/Api";
import ThirdSec from './Sections/Third-Section/ThirdSEC';

const App = () => {

    const getNews = async () => {
        const res = await axiosInstance.get('/news')
        console.log(res)
    }

    useEffect(() => {
        getNews()
    }, []);


    return (
        <div>

     <ThirdSec />

        </div>
    );
};



export default App;