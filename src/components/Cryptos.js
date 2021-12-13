import React from 'react';

//styles
import styles from "./Cryptos.module.css"
const Cryptos = ({ name, symbol, image, price, marketCap, change }) => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <img className={styles.image} src={image} alt={name} />
                <span className={styles.name}>{name}({symbol})</span>
                <span className={styles.price}>$ {price.toLocaleString()}</span>
                <span className={change > 0 ? styles.greenchange : styles.redchange}>% {change.toFixed(2)}</span>
                <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
            </div>
        </div>
    );
};

export default Cryptos;