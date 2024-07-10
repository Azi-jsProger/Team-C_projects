import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import TestPage from "../pages/TestPage/TEST";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/test'} element={<TestPage />}/>
        </Routes>
    );
};

export default MainRoutes;