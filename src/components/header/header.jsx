import React from "react";
import styles from "./header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <button className={styles.logout}></button>
      <h1 className={styles.title}>Four Season Diary ✏️</h1>
    </header>
  );
};

export default Header;
