import React from "react";
import styles from "./header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <button className={styles.logout}></button>
      <h2 className={styles.title}>Four Season Diary ✏️</h2>
    </header>
  );
};

export default Header;
