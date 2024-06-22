import React from 'react';
import Button from '@mui/material/Button';

const ButtonMaterial = (props) => {

    const {
        styles,
        value,
        img,
        hoverStyles,
        onSubmit
    } = props

    const buttonStyles = {
        ...styles,
        '&:hover': {
            ...hoverStyles
        }
    };

    return (
        <Button sx={buttonStyles} variant="contained" >
            <img src={img} alt=""/>
            {value}
        </Button>
    );
};

export default ButtonMaterial ;