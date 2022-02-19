import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.scss';

const Nav = (props) => {
  return (
    <section className={styles.nav}>
      <ul className={styles.list}>
        <Link to="/calendar">
          <li className={styles.item}>
            <span className={styles.item_text}>Calendar</span>
          </li>
        </Link>
        <Link to="/weekly">
          <li className={styles.item}>
            <span className={styles.item_text}>Weekly</span>
          </li>
        </Link>
        <Link to="/daily">
          <li className={styles.item}>
            <span className={styles.item_text}>Daily</span>
          </li>
        </Link>
        <Link to="/memo">
          <li className={styles.item}>
            <span className={styles.item_text}>Memo</span>
          </li>
        </Link>
        <Link to="/setting">
          <li className={styles.item}>
            <span className={styles.item_text}>Setting</span>
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default Nav;
