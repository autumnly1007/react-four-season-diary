import React from 'react';
import Dates from '../dates/dates';
import styles from './calendar_body.module.scss';

const CalendarBody = (props) => {
  const { calendar, today, month, year, menu } = props;

  const thisFirst = calendar.indexOf(1); // 첫번째 1일의 인덱스
  const nextFirst = calendar.indexOf(1, 7); // 첫번째 주를 제외한 1일의 인덱스 (다음 달의 1일)

  const isToday = calendar.indexOf(today); // 오늘 일자의 인덱스
  const getMonth = new Date().getMonth() + 1;

  return (
    <ul className={styles.calendar_body}>
      {calendar.map((item, idx) => {
        return (
          <Dates
            key={idx}
            idx={idx}
            thisFirst={thisFirst}
            nextFirst={nextFirst}
            item={item}
            year={year}
            month={month}
            menu={menu}
            isToday={today === idx && month === getMonth && isToday}
          />
        );
      })}
    </ul>
  );
};

export default CalendarBody;
