import React from "react";

//styles
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch }) {
  const searchHandler = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search..."
      value={search}
      onChange={searchHandler}
    />
  );
}

export default SearchBox;
