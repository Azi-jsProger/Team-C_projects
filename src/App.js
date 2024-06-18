import React, {useEffect} from 'react';
import {axiosInstance} from "./Utils/API/Api";

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



        </div>
    );
};

export default App;