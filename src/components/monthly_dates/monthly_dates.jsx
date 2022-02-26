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

  if (weekNum < 3 && item > 14) {
    isPrevDate = styles.prev;
  }

  if (weekNum > 3 && item < 8) {
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
