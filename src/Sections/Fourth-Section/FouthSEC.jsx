import React from 'react';
<<<<<<< HEAD

const FouthSec = () => {
    return (
        <div>

        </div>
    );
=======
import New from "../../components/new/New";
import styles from './style.module.css'

const FouthSec = (props) => {

    const {
        news
    } = props


    return (<div className={styles.fouth}>
            <div className='container'>
                <h2 className={styles.POl}>Полезные статьи:</h2>

                <div className={styles.card}></div>

                {news.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className={styles.card}
                        >
                            <New
                                image={item.image}
                                text={item.text}
                            />
                        </div>
                    )
                })}
            </div>
        </div>);
>>>>>>> ff32ae29fdbd206d5ed447badbb1a406cbc10623
};

export default FouthSec;