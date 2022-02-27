import React, { useState } from 'react';
import styles from './monthly_dates.module.scss';

const MonthlyDates = (props) => {
  const { item, isToday, year, month, idx, setWeek, weekNum } = props;

  const [userInput, setUserInput] = useState({});
  const [eventList, setEventList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  let isPrevDate = null;
  let isNextDate = null;
  let isWeekly = null;

  let key = `${month}` + `${item}`;

  const onInsert = (value) => {};

  // 1주차, 7일 이후일 경우 : 이전 달의 날짜
  if (weekNum === 1 && item > 7) {
    isPrevDate = styles.prev;
  }

  // 5주차 이상, 8일 이전일 경우 : 다음 달의 날짜
  if (weekNum >= 5 && item < 8) {
    isNextDate = styles.next;
  }

  return (
    <>
      <li
        className={`${styles.date} ${isPrevDate} ${isNextDate} ${isWeekly} ${isToday}`}
        //onClick={onDateClick}
      >
        <div className={`${styles.number} ${isWeekly}`}>{item}</div>
      </li>
    </>
  );
};

export default MonthlyDates;
