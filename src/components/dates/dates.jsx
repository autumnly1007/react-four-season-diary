import React, { useState } from 'react';
import styles from './dates.module.scss';

const Dates = (props) => {
  const { thisFirst, nextFirst, item, isToday, year, month, idx, menu } = props;

  const [userInput, setUserInput] = useState({});
  const [eventList, setEventList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  let isPrevDate = null;
  let isNextDate = null;
  let isWeekly = null;

  let key = `${month}` + `${item}`;

  const onInsert = (value) => {};

  // 현재 인덱스가 첫번째 1일의 인덱스보다 작을 경우 (이전 달의 일자)
  if (idx < thisFirst) {
    isPrevDate = styles.prev;
  }

  // 현재 인덱스가 두번째 1일의 인덱스 -1 보다 클 경우 (다음 달의 일자)
  if (nextFirst > 0 && idx > nextFirst - 1) {
    isNextDate = styles.next;
  }

  if (menu === 'weekly') {
    isWeekly = styles.weekly;
  }

  console.log(isToday);

  return (
    <>
      <li
        className={`${styles.date} ${isPrevDate} ${isNextDate} ${isWeekly} ${isToday}`}
      >
        <div className={`${styles.number} ${isWeekly}`}>{item}</div>
      </li>
    </>
  );
};

export default Dates;
