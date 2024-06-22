import React from 'react';
import styles from './style.module.css';
import {motion} from "framer-motion";

const New = (props) => {
    const {
        image,
        text
    } = props;

    return (
        <div className={styles.flex}>
            <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >{text}</motion.p>
            <div className={styles.img}>
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    src={image} />
            </div>
        </div>
    );
}

export default New;
