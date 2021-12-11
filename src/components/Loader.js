import React from 'react';

//styles
import styles from "./Loader.module.css"
const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.first}>
                <div className={styles.second}>
                    <div className={styles.third}>

                    </div>
                </div>
            </div>
            <h2>Loading...</h2>
        </div>
    );
};

export default Loader;