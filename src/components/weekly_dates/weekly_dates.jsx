import React, { useState } from 'react';
import styles from './weekly_dates.module.scss';

const WeeklyDates = (props) => {
  const { thisFirst, nextFirst, item, isToday, year, month, idx } = props;

  const [userInput, setUserInput] = useState({});
  const [eventList, setEventList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  let isPrevDate = null;
  let isNextDate = null;

  let key = `${month}` + `${item}`;

  const onInsert = (value) => {};

  return (
    <>
      <li className={styles.date}>
        <div className={styles.number}>{item}</div>
      </li>
    </>
  );
};

export default WeeklyDates;
