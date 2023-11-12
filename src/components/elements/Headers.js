import React from "react";

//style
import styles from "./Headers.module.css";

function Headers() {
  return (
    <div className={styles.titles}>
      <span className={`${styles.text} ${styles.name}`}>Coin name</span>
      <span className={styles.text}>Current price</span>
      <span className={styles.text}>Change Percent</span>
      <span className={styles.text}>Market Cap</span>
      <span className={`${styles.text} ${styles.mainSparkline}`}>
        Sparklines
      </span>
    </div>
  );
}

export default Headers;
