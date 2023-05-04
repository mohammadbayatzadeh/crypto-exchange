import React from "react";

//styles
import styles from "./Cryptos.module.css";

//sparkline
const sparkline = require("node-sparkline");

const Cryptos = ({ change, data }) => {
  const values = [...data.sparkline_in_7d.price];
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  let svg = sparkline({
    values,
    width: 150,
    height: 50,
    stroke: change > 0 ? "green" : "red",
    strokeWidth: 1,
    strokeOpacity: 1,
  });
  let deatilSvg = sparkline({
    values,
    width: 290,
    height: 100,
    stroke: change > 0 ? "green" : "red",
    strokeWidth: 1,
    strokeOpacity: 1,
  });

  return (
    <div className={styles.body}>
      <div className={styles.container} onClick={handleOpen}>
        <img className={styles.image} src={data.image} alt={data.name} />
        <span className={styles.text}>
          {data.name}({data.symbol})
        </span>
        <span className={styles.text}>
          $ {data.current_price.toLocaleString()}
        </span>
        <span className={change > 0 ? styles.greenchange : styles.redchange}>
          % {change}
        </span>
        <span className={styles.text}>
          $ {data.market_cap.toLocaleString()}
        </span>
        {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />}
      </div>
      {open ? (
        <div className={styles.details}>
          <div className={styles.detailsContainer}>
            <img
              className={styles.detailsImage}
              src={data.image}
              alt={data.name}
            />
            <div className={styles.column}>
              <span className={styles.text}>
                Name:
                {data.name}
              </span>
              <span className={styles.text}>
                Symbol:
                {data.symbol}
              </span>
              <span className={styles.text}>
                price: ${data.current_price.toLocaleString()}
              </span>
            </div>
            <div className={styles.column}>
              <span
                className={change > 0 ? styles.greenchange : styles.redchange}
              >
                Change: % {change}
              </span>
              <span>High 24H: ${data.high_24h}</span>
              <span> 24H: ${data.low_24h}</span>
            </div>
            <div className={styles.column}>
              <span className={styles.marketCap}>
                marketCap: ${data.market_cap.toLocaleString()}
              </span>
              <span className={styles.marketCap}>
                marketCap rank: {data.market_cap_rank.toLocaleString()}
              </span>
            </div>
            {svg && <div dangerouslySetInnerHTML={{ __html: deatilSvg }} />}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cryptos;
