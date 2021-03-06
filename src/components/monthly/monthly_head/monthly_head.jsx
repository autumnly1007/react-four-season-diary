import React from 'react';
import styles from './monthly_head.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const DAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const MonthlyHead = (props) => {
  const { year, month, goToday, setMonth, isMonthly } = props;

  return (
    <div className={styles.calendar_head}>
      <div className={styles.header}>
        {isMonthly && (
          <ul className={styles.memo}>
            <li className={styles.memo_item}>
              <input type="checkbox" />
              <input className={styles.memo_input} type="text" />
            </li>
            <li className={styles.memo_item}>
              <input type="checkbox" />
              <input className={styles.memo_input} type="text" />
            </li>
          </ul>
        )}
        <div className={`${styles.title}`}>
          <span className={styles.year}>{year}.</span>
          <span className={styles.month}>{('0' + month).slice(-2)}</span>
        </div>
        <div className={`${styles.nav}`}>
          <button onClick={() => setMonth(month - 1)}>
            <FontAwesomeIcon icon={faAngleLeft} size="lg" />
          </button>
          <button className={styles.today} onClick={() => goToday()}>
            <span className={styles.today_text}>Today</span>
          </button>
          <button onClick={() => setMonth(month + 1)}>
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
          </button>
        </div>
      </div>
      <ul className={styles.labels}>
        {DAY.map((item, idx) => {
          return (
            <li className={styles.label} key={idx}>
              <span className={styles.label_text}>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MonthlyHead;
