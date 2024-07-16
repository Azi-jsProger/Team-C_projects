import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import TestPage from "../pages/TestPage/TEST";
import FailedPage from "../pages/FailedPage/failedPage";
import PassedPage from "../pages/PassedPage/passedPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/test'} element={<TestPage />}/>
            <Route path={'/passed'} element={<PassedPage />}/>
            <Route path={'/fail'} element={<FailedPage />}/>
        </Routes>
    );
};

export default MainRoutes;