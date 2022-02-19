import React, { useEffect, useState } from 'react';
import WeeklyDates from '../weekly_dates/weekly_dates';
import styles from './weekly.module.scss';

Date.prototype.getWeek = () => {
  const date = new Date();
  var onejan = new Date(date.getFullYear(), 0, 1);
  var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  var dayOfYear = (today - onejan + 86400000) / 86400000;
  return Math.ceil(dayOfYear / 7);
};

const YEAR = new Date().getFullYear();
const MONTH = new Date().getMonth() + 1;
const WEEK = new Date().getWeek();

const Weekly = (props) => {
  const [year, setYear] = useState(YEAR);
  const [month, setMonth] = useState(MONTH);
  const [week, setWeek] = useState(WEEK);
  const [calendar, setCalendar] = useState([]);
  const [today, setToday] = useState(0);

  const onChangeWeek = (week) => {
    let startDate = getStartDayFromWeek(week, year);
    let endDate = getEndDayFromWeek(week, year);
    for (let date = startDate; date <= endDate; date++) {
      calendar.push(date);
    }
    return calendar;
  };

  const getStartDayFromWeek = (week, year) => {
    const curDay = new Date(year, 0, 1 + (week - 1) * 7);
    while (curDay.getDay() !== 0) {
      curDay.setDate(curDay.getDate() - 1);
    }
    return curDay.getDate();
  };

  const getEndDayFromWeek = (week, year) => {
    const curDay = new Date(year, 0, 1 + (week - 1) * 7);
    while (curDay.getDay() !== 6) {
      curDay.setDate(curDay.getDate() - 1);
    }
    return curDay.getDate();
  };

  const goToday = () => {
    let TODAY = new Date().getDate();
    let goMonth = new Date().getMonth() + 1;
    setMonth(goMonth);
    setToday(TODAY);
  };

  // 처음 한번만 실행
  useEffect(() => {
    setWeek(onChangeWeek(8));
  }, []);

  // week 의 상태가 변경될 때 마다 호출
  // useEffect(() => {
  //   setWeek(onChangeWeek(week));
  // }, [week]);

  return (
    <ul className={styles.container}>
      {calendar.map((item, idx) => {
        return (
          <WeeklyDates
            key={idx}
            idx={idx}
            item={item}
            year={year}
            month={month}
            calendar={calendar}
          />
        );
      })}
    </ul>
  );
};

export default Weekly;
