import React, { useState } from 'react';
import styles from './weekly_dates.module.scss';

const WeeklyDates = (props) => {
  const { thisFirst, nextFirst, item, isToday, year, month, idx } = props;

  const [userInput, setUserInput] = useState({});
  const [eventList, setEventList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  let isPrevDate = null;
  let isNextDate = null;
  let isCalendar = null;

  if (idx === 0) {
    isCalendar = styles.calendar;
  }

  let key = `${month}` + `${item}`;

  const onInsert = (value) => {};

  return (
    <>
      <li className={`${styles.date} ${isCalendar}`}>
        <div className={`${styles.number} ${isCalendar}`}>{item}</div>
        {idx !== 0 && (
          <>
            {/* <div className={styles.schedule}></div> */}
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
