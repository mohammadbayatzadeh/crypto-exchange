import React from "react";

//styles
import styles from "./Cryptos.module.css";

//icons
import Dropdown_Icon from "../../assets/Icons/images.png";
import CryproText from "../elements/CryproText";

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
    <div className={open ? `${styles.body} ${styles.active}` : styles.body}>
      <div className={styles.container}>
        <img className={styles.image} src={data.image} alt={data.name} />
        <CryproText text={`${data.name}(${data.symbol})`} />
        <CryproText text={`$ ${data.current_price.toLocaleString()}`} />
        <CryproText text={`$ ${change}`} change={change} />
        <CryproText text={`$ ${data.market_cap.toLocaleString()}`} />
        {svg && (
          <div
            className={styles.mainSparkline}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        )}
        <img
          alt={data.name}
          src={Dropdown_Icon}
          onClick={handleOpen}
          className={
            open
              ? `${styles.dropDownIcon} ${styles.Active}`
              : styles.dropDownIcon
          }
        />
      </div>
      <div className={styles.details}>
        <div className={styles.detailsContainer}>
          <img
            className={styles.detailsImage}
            src={data.image}
            alt={data.name}
          />
          <div className={styles.column}>
            <CryproText text={`Name:${data.name}`} />
            <CryproText text={`Symbol:${data.symbol}`} />
            <CryproText text={`Price:${data.current_price.toLocaleString()}`} />
          </div>
          <div className={styles.column}>
            <CryproText text={`Change: % ${change}`} change={change} />
            <CryproText text={`High 24H:${data.high_24h}`} />
            <CryproText text={`low 24H:${data.low_24h}`} />
          </div>
          <div className={styles.column}>
            <CryproText
              text={`marketCap:${data.market_cap.toLocaleString()}`}
              light={true}
            />
            <CryproText
              text={`marketCap rank:${data.market_cap_rank.toLocaleString()}`}
              light={true}
            />
          </div>
          {svg && (
            <div
              className={styles.sparkline}
              dangerouslySetInnerHTML={{ __html: deatilSvg }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cryptos;
