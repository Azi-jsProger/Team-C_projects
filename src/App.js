import React from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MainRoutes from "./routes/mainRoutes";
import FailedPage from "./pages/FailedPage/failedPage";
import PassedPage from "./pages/PassedPage/passedPage";


const App = () => {
    return (
        <div>
            <MainRoutes />
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
