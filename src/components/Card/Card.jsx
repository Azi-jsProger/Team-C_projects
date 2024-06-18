import React from 'react';
import './style.css'

const Card = (props) => {

    const {
        img,
        title
    } = props

    return (
        <div className='card'>
            <div className="circle">
                <img src={img} alt=""/>
            </div>

            <h3 className='title'>{title}</h3>
        </div>
    );
};

export default Card;