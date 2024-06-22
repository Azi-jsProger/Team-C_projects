import {React,useState,useEffect} from 'react';
import SecondSec from "./Sections/Second-Section/SecondSEC";
import FourthSec from "./Sections/Fourth-Section/FouthSEC";
import ButtonMaterial from "./components/Button/Button";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import FirstSec from "./Sections/First-Section/FirstSEC";
import ThirdSec from './Sections/Third-Section/ThirdSEC'
import {axiosInstance} from "./Utils/API/Api";


const App = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const getNews = async () => {
        setIsLoading(true)
       try {
           const res = await axiosInstance.get('/send-news');
           setNews(res);
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
            <FirstSec />
            <SecondSec />
            <ThirdSec />

        </div>
    );
};


export default App;

