import React, { useState } from 'react';
import WeeklyCalendar from '../weekly_calendar/weekly_calendar';
import styles from './weekly_dates.module.scss';

const WeeklyDates = (props) => {
  const { idx, item } = props;
  return (
    <>
      <li className={styles.date}>
        {idx === 0 && <WeeklyCalendar />}
        {idx > 0 && (
          <>
            <div className={styles.number}>{item}</div>
            <div className={styles.input}>
              <textarea className={styles.textarea} />
            </div>
          </>
        )}
      </li>
    </>
  );
};

export default WeeklyDates;
