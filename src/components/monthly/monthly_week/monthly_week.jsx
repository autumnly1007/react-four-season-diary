import React, { useEffect, useState } from 'react';
import MonthlyDates from '../monthly_dates/monthly_dates';
import styles from './monthly_week.module.scss';

const YEAR = new Date().getFullYear();
const MONTH = new Date().getMonth() + 1;
const DATE = new Date().getDate();

const MonthlyWeek = (props) => {
  const { week, today, month, year, weekNum, onChangeWeek, isMonthly } = props;
  let monthlyStyles = '';

  const onChangeWeekly = () => {
    onChangeWeek(week);
  };

  // 해당 week 에 오늘이 포함되어 있을 경우
  // if (year === YEAR && month === MONTH && week.includes(DATE)) {
  //   onChangeWeek(week);
  // }

  if (isMonthly) {
    monthlyStyles = styles.monthly_styles;
  }

  return (
    <section className={styles.container}>
      {
        <ul
          className={`${styles.monthly_week} ${monthlyStyles}`}
          onClick={onChangeWeekly}
        >
          {week.map((item, idx) => {
            return (
              <MonthlyDates
                key={idx}
                idx={idx}
                item={item}
                year={year}
                weekNum={weekNum}
              />
            );
          })}
        </ul>
      }
    </section>
  );
};

export default MonthlyWeek;
