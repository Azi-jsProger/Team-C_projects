import React from 'react';
import Button from '@mui/material/Button';

const ButtonMaterial = (props) => {
    const {
        styles,
        value,
        img,
        hoverStyles,
        onSubmit,
        disabled
    } = props

    const buttonStyles = {
        ...styles,
        '&:hover': {
            ...hoverStyles
        }
    };

    return (
        <Button sx={buttonStyles} variant="contained" onClick={onSubmit} disabled={disabled}>
            {img && <img style={{objectFit:'cover'}} src={img} alt="" />}
            {value}
        </Button>
    );
};

export default ButtonMaterial;
