import React, { useEffect, useState } from 'react';
import Monthly from '../monthly/monthly';
import MonthlyDates from '../monthly_dates/monthly_dates';
import styles from './monthly_week.module.scss';

const MonthlyWeek = (props) => {
  const { week, today, month, year, setWeek, weekNum } = props;

  return (
    <section className={styles.container}>
      {
        <ul className={styles.monthly_week}>
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
