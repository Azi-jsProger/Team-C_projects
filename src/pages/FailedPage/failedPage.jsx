import React from 'react';
import '../ResultStyles/style.css'
import TestOverview from "../../components/TestOverview/TestOverview";
const FailedPage = () => {
    return (
        <div className='Fail'>
            <div className="container">
                <TestOverview />

            </div>
        </div>
    );
};

export default FailedPage;