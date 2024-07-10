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
import Test from "./pages/TestPage/TEST";
import Time from "./components/Time/Timer";
import Timer from "./components/Time/Timer";
import MainPage from "./pages/MainPage/MainPage";
import MainRoutes from "./routes/mainRoutes";
import FailedPage from "./pages/FailedPage/failedPage";

const App = () => {
    return (
        <div>
            {/*<MainRoutes />*/}
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
            <FailedPage></FailedPage>
        </div>
    );
};

export default App;
