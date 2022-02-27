import React, { useEffect, useState } from 'react';
import styles from './monthly.module.scss';
import MonthlyHead from '../monthly_head/monthly_head';
import MonthlyBody from '../monthly_body/monthly_body';

const YEAR = new Date().getFullYear();
const MONTH = new Date().getMonth() + 1;
const WEEKNUM = 7;

const Monthly = () => {
  const [year, setYear] = useState(YEAR);
  const [month, setMonth] = useState(MONTH);
  const [weeks, setWeeks] = useState([]);
  const [today, setToday] = useState(0);

  const onChangeDate = (month) => {
    let prevEndDate = new Date(YEAR, month - 1, 0).getDate(); // 지난달의 마지막 일자
    let prevEndDay = new Date(YEAR, month - 1, 0).getDay(); // 지난달의 마지막 요일
    let thisEndDate = new Date(YEAR, month, 0).getDate(); // 이번달의 마지막 일자
    let thisEndDay = new Date(YEAR, month, 0).getDay(); // 이번달의 마지막 요일

    let prevDates = []; // 캘린더의 첫번째 주에 넣어줄 지난달의 마지막 주 일자들
    let nextDates = []; // 캘린더의 마지막 주에 넣어줄 다음달의 첫번째 주 일자들
    let calendar = []; // 모든 일자를 담을 배열
    let weeks = []; // 리턴할 주차 배열

    // 지난달의 마지막 요일이 토요일이 아닐 경우
    if (prevEndDay !== 6) {
      for (let i = 0; i <= prevEndDay; i++) {
        prevDates.unshift(prevEndDate - i);
        // 만약 마지막 일자가 31일 이고, 마지막 요일이 금요일일 경우 (5)
        // i는 0부터 5까지 증가하면서
        // 배열의 제일 앞에 하나의 일자씩 넣어줌 (unshift)
        // prevDates = [26 ,27, 28, 29, 30, 31]
      }
    }

    for (let i = 1; i < 7 - thisEndDay; i++) {
      if (i === 0) {
        return nextDates;
      }
      nextDates.push(i);
      // 만약 마지막 요일이 수요일일 경우 (3)
      // i는 1부터 시작해서 1 < 4, 2 < 4, 3 < 4 조건만족
      // nextDates = [1, 2, 3]
    }

    // 이번달의 마지막 일자 + 1 개의 배열 요소를 생성하고 인덱스 값만 가져온 후 0을 삭제
    calendar = [...Array(thisEndDate + 1).keys()].slice(1);
    calendar = prevDates.concat(calendar, nextDates);

    // 일주일 단위로 잘라서 배열에 넣어주기
    for (let i = 0; i < calendar.length; i += WEEKNUM) {
      weeks.push(calendar.slice(i, i + WEEKNUM));
    }

    return weeks;
  };

  const goToday = () => {
    let TODAY = new Date().getDate();
    let goMonth = new Date().getMonth() + 1;
    setMonth(goMonth);
    setToday(TODAY);
  };

  // 처음 한번만 실행
  useEffect(() => {
    setWeeks(onChangeDate(2));
  }, []);

  // month 의 상태가 변경될 때 마다 호출
  useEffect(() => {
    setWeeks(onChangeDate(month));
  }, [month]);

  return (
    <section className={`${styles.container}`}>
      <MonthlyHead
        year={year}
        month={month}
        setMonth={setMonth}
        goToday={goToday}
      />
      <MonthlyBody weeks={weeks} today={today} month={month} year={year} />
    </section>
  );
};

export default Monthly;
