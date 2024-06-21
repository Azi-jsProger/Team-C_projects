import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {

    const style = {
      width:'100%',
      height:'100vh'
    }

    return (
        <CircularProgress sx={style} color="success" />
    );
};

export default Loading;