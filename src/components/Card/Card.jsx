import React from 'react';
import './style.css'
import {motion} from "framer-motion";

const Card = (props) => {

    const {
        img,
        title
    } = props

    return (
        <div className='card'>
            <motion.div
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{ duration: 0.5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="circle"
            >
                <img src={img} alt=""/>
            </motion.div>

            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className='title'>
                {title}
            </motion.h3>
        </div>
    );
};

export default Card;