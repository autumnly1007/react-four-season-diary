import React, { useState } from 'react';
import WeeklyCalendar from '../weekly_calendar/weekly_calendar';
import styles from './weekly_dates.module.scss';

const YEAR = new Date().getFullYear();
const MONTH = new Date().getMonth() + 1;
const WEEKNUM = 7;

const WeeklyDates = (props) => {
  const {
    idx,
    item,
    year,
    setYear,
    month,
    setMonth,
    weeks,
    setWeeks,
    today,
    setToday,
    YEAR,
    MONTH,
    WEEKNUM,
    onChangeWeek,
  } = props;

  return (
    <>
      <li className={styles.date}>
        {idx === 0 && (
          <WeeklyCalendar
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
            weeks={weeks}
            setWeeks={setWeeks}
            today={today}
            setToday={setToday}
            YEAR={YEAR}
            MONTH={MONTH}
            WEEKNUM={WEEKNUM}
            onChangeWeek={onChangeWeek}
          />
        )}
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
