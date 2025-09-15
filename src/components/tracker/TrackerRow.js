import React, { useState } from 'react';
import { Interval } from '../model/Interval';
import Styles from '../../styles/Styles.module.css';
import '../../styles/tracker/TrackerRow.css';

function Task({ task, refreshTasks }) {
  const [checked, setChecked] = useState(Array(7).fill(false));
  var interval = task.frequency.interval;
  const count = task.frequency.count;

  const handleCheck = idx => {
    setChecked(prev =>
      prev.map((val, i) => (i === idx ? !val : val))
    );
  };

  let status = '';

  if (interval === Interval.WEEK) {
    const checkedCount = checked.filter(Boolean).length;
    const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
    const daysLeft = checked.slice(todayIdx).filter(val => !val).length;

    if (checkedCount >= count) {
      status = 'done';
    } else if (checkedCount + daysLeft >= count) {
      status = 'on track';
    } else {
      status = 'missed';
    }
  } else if (interval === Interval.DAY) {
    const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
    const missed = checked.slice(0, todayIdx).some(val => !val);
    if (checked.every(Boolean)) {
      status = 'done';
    } else if (missed) {
      status = 'missed';
    } else {
      status = 'on track';
    }
  }

  return (
    <div className="tracker-row">
      <div className={`tracker-row-title tracker-row-box ${Styles.blueTrackerRow}`}>{task.taskName}, {count} times per {interval}</div>
      <div className="checkboxes">
        {Array.from({ length: 7 }).map((_, idx) => (
          <div className="checkbox tracker-row-box" key={idx}>
            <input
              type="checkbox"
              checked={checked[idx]}
              onChange={() => handleCheck(idx)}
            />
          </div>
        ))}
      </div>
      <div className={`tracker-row-status tracker-row-box ${Styles.blueTrackerRow}`}>{status}</div>
    </div>
  );
} export default Task;