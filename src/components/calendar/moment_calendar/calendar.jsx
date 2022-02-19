import React, { useState } from 'react';
import styles from './calendar.module.scss';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const MomentCalendar = () => {
  // moment() 는 오늘
  const [date, setDate] = useState(moment());

  // 일자 클릭 시 state 셋팅
  const handleDayClick = (current) => {
    setDate(current);
  };

  // 오늘 날짜 state 셋팅
  const returnToday = () => {
    setDate(moment());
  };

  // 화살표 클릭 시 이전달/다음달로 변경
  const jumpToMonth = (flag) => {
    flag
      ? setDate(date.clone().add(30, 'day'))
      : setDate(date.clone().subtract(30, 'day'));
  };

  // 캘린더 생성
  function createCalendar() {
    const today = date;

    // startOf('month') : 현재 month 의 첫번째 일자
    // week() : Week of Year => 현재 year 에서 몇 번째 주인지
    // startOf('month').week() : 현재 month 의 첫번째 일자가 현재 year 에서 몇 번째 주인지
    const startWeek = today.clone().startOf('month').week();

    // endOf('month') : 현재 month 의 마지막 일자
    // endOf('month').week() : 현재 month 의 마지막 일자가 현재 year 에서 몇 번째 주인지
    // 만약 첫번째 주라면 (1월 1일이 있는 주차) 마지막 번째 주인 53 번째 주로 셋팅
    // 마지막 주는 첫번째 주가 될 수 없기 때문
    const endWeek =
      today.clone().endOf('month').week() === 1
        ? 53
        : today.clone().endOf('month').week();

    let calendar = [];

    // 현재 month 의 시작 주차부터 끝나는 주차까지 1씩 증가
    for (let week = startWeek; week <= endWeek; week++) {
      // 일주일 날짜 배열을 만들고 0으로 채우기
      calendar.push(
        <div className={styles.week} key={week}>
          {Array(7)
            .fill(0)
            .map((item, index) => {
              // 현재 주차의 시작일자
              let current = today
                .clone()
                .week(week)
                .startOf('week')
                .add(item + index, 'day'); // 현재 배열의 요소 값에 index 를 더해서 일자를 표기

              // 만약 표기하려는 일자가 현재 일자와 동일하다면 'today'
              let isToday =
                current.format('YYYYMMDD') === today.format('YYYYMMDD')
                  ? styles.today
                  : '';

              // 만약 표기하려는 일자의 month 가 현재 일자의 month 와 동일하지 않다면 'disabled'
              let isDisabled =
                current.format('MM') !== today.format('MM')
                  ? styles.disabled
                  : '';

              return (
                <div
                  className={`${styles.day} ${isToday} ${isDisabled}`}
                  key={current}
                  onClick={() => handleDayClick(current)}
                >
                  <span className={styles.text}>{current.format('D')}</span>
                </div>
              );
            })}
        </div>
      );
    }
    return calendar;
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.month}>{date.format('MMMM YYYY')}</div>
        <div className={styles.nav}>
          <button onClick={() => jumpToMonth(0)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button onClick={returnToday}>Today</button>
          <button onClick={() => jumpToMonth(1)}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className={styles.row}>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((item) => (
          <div className={styles.label} key={item}>
            <span className={styles.text}>{item}</span>
          </div>
        ))}
      </div>
      {createCalendar()}
    </section>
  );
};

export default MomentCalendar;
