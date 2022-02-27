import React, { useEffect, useState } from 'react';
import MonthlyDates from '../monthly_dates/monthly_dates';
import styles from './monthly_week.module.scss';

const MonthlyWeek = (props) => {
  const { week, today, month, year, weekNum, onChangeWeek } = props;

  const onChangeWeekly = () => {
    onChangeWeek(week);
  };

  return (
    <section className={styles.container}>
      {
        <ul className={styles.monthly_week} onClick={onChangeWeekly}>
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
