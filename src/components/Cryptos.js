import React from "react";

//styles
import styles from "./Cryptos.module.css";

//sparkline
const sparkline = require("node-sparkline");

const Cryptos = ({
  name,
  symbol,
  image,
  price,
  marketCap,
  change,
  sparklines,
}) => {
  const values = [...sparklines];
  let svg = sparkline({
    values,
    width: 150,
    height: 50,
    stroke: change > 0 ? "green" : "red",
    strokeWidth: 1.25,
    strokeOpacity: 1,
  });

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img className={styles.image} src={image} alt={name} />
        <span className={styles.name}>
          {name}({symbol})
        </span>
        <span className={styles.price}>$ {price.toLocaleString()}</span>
        <span className={change > 0 ? styles.greenchange : styles.redchange}>
          % {change}
        </span>
        <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
        {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />}
      </div>
    </div>
  );
};

export default Cryptos;
