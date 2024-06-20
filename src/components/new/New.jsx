import React from 'react';
import styles from './style.module.css';

const New = (props) => {
    const {
        image,
        text
    } = props;

    return (
        <div className={styles.flex}>
            <p>{text}</p>
            <div className={styles.img}>
                <img src={image} alt="" />
            </div>
        </div>
    );
}

export default New;
