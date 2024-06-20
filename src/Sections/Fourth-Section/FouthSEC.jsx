import React from 'react';
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
};

export default FouthSec;