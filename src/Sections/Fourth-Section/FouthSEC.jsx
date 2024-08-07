import React, { useState, useEffect, useCallback } from 'react';
import New from "../../components/new/New";
import styles from './style.module.css';
import Loading from "../../components/Loading/Loading";

const FourthSec = (props) => {
    const {
        news,
        isLoading,
        error,
        id
    } = props;

    return (
        <section className={styles.fSection} id={id}>
            {error ? (
                <div className={styles.error_div}><h1 className={styles.error}>{error}</h1></div>
            ) : (
                <div>
                    {isLoading ? (
                        <div className={styles.loa}>
                            <Loading />
                        </div>
                    ) : (
                        <div className={styles.fouth}>
                            <div className='container'>
                                <h2 className={styles.POl}>Полезные статьи:</h2>
                                {news.map((item, idx) => (
                                    <div key={idx} className={styles.card}>
                                        <New
                                            image={item.image}
                                            text={item.text}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export default FourthSec;
