import React from 'react';
import New from "../../components/new/New";
import styles from './style.module.css';
import Loading from "../../components/Loading/Loading";

const FourthSec = (props) => {
    const {
        news,
        isLoading
    } = props;

    return (
        <div className={styles.fSection}>
            {isLoading ?
                <div className={styles.loa}>
                    <Loading></Loading>
                </div>
                :
                <div className={styles.fouth}>
                    <div className='container'>
                        <h2 className={styles.POl}>Полезные статьи:</h2>
                        {news.map((item, idx) => {
                            return (
                                <div key={idx} className={styles.card}>
                                    <New
                                        image={item.image}
                                        text={item.text}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            }

        </div>

    );
};

export default FourthSec;
