import React, { useState } from 'react';
import styles from './monthly.module.scss';
import Calendar from '../calendar/calendar';

const Monthly = (props) => {
  const [menu, setMenu] = useState('monthly');
  return <Calendar menu={menu} />;
};

export default Monthly;
