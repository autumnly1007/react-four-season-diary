import React from 'react';
import MonthlyWeek from '../monthly_week/monthly_week';
import styles from './monthly_body.module.scss';

const MonthlyBody = (props) => {
  const { weeks, today, month, year, onChangeWeek, isMonthly } = props;
  const getMonth = new Date().getMonth() + 1;

  return (
    <ul className={styles.monthly_body}>
      {weeks.map((week, idx) => {
        return (
          <MonthlyWeek
            key={idx}
            weekNum={idx + 1}
            week={week}
            year={year}
            month={month}
            onChangeWeek={onChangeWeek}
            isMonthly={isMonthly}
            //isToday={today === idx && month === getMonth && isToday}
          />
        );
      })}
    </ul>
  );
};

export default MonthlyBody;
