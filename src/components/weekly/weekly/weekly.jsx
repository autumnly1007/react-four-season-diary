import React, { useEffect, useState } from 'react';
import WeeklyDates from '../weekly_dates/weekly_dates';
import styles from './weekly.module.scss';

const YEAR = new Date().getFullYear();
const MONTH = new Date().getMonth() + 1;
const WEEKNUM = 7;

const Weekly = (props) => {
  const [year, setYear] = useState(YEAR);
  const [month, setMonth] = useState(MONTH);
  const [weeks, setWeeks] = useState([]);
  const [today, setToday] = useState(0);

  const dateArr = Array.from({ length: WEEKNUM + 1 }, () => 0);
  const [date, setDate] = useState(dateArr);

  // 캘린더 배열
  const calendar = Array.from({ length: 1 }, () => 0);

  // weekly 날짜 변경
  const onChangeWeek = (week) => {
    // 캘린더 배열과 week 배열 concat
    setDate(calendar.concat(week));
    //setDate(week.unshift(0));
  };

  return (
    <section className={styles.container}>
      <ul className={styles.weekly_body}>
        {date.map((item, idx) => {
          return (
            <WeeklyDates
              key={idx}
              idx={idx}
              item={item}
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
          );
        })}
      </ul>
    </section>
  );
};

export default Weekly;
