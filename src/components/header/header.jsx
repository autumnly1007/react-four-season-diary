import React from 'react';
import styles from './header.module.scss';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Four Season Diary ✏️</h2>
      <div className={styles.buttons}>
        <button className={styles.logout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
