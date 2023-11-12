import React from "react";

//styles
import styles from "./CryptoText.module.css";

function CryproText({ text, change, light }) {
  const color = () => {
    if (change > 0) {
      return "green";
    } else if (change < 0) {
      return "red";
    } else {
      return "black";
    }
  };
  return (
    <span
      className={styles.text}
      style={{ color: color(), fontWeight: light ? 300 : "bold" }}
    >
      {text}
    </span>
  );
}

export default CryproText;
