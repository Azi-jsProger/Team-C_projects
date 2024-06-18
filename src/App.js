import React, {useEffect} from 'react';
import {axiosInstance} from "./Utils/API/Api";
import SecondSec from "./Sections/Second-Section/SecondSEC";

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

            <SecondSec></SecondSec>

        </div>
    );
};

export default App;