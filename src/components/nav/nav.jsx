import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.scss";

const Nav = (props) => {
  return (
    <section className={styles.nav}>
      <ul className={styles.list}>
        <Link to="/calendar">
          <li className={styles.item}>
            <span>Calendar</span>
          </li>
        </Link>
        <Link to="/memo">
          <li className={styles.item}>Memo</li>
        </Link>
        <Link to="/setting">
          <li className={styles.item}>Setting</li>
        </Link>
      </ul>
    </section>
  );
};

export default Nav;
