import React, { useState } from 'react';
import '../styles/Task.css';

function Task({ task, times, period }) {
  const [checked, setChecked] = useState(Array(7).fill(false));

  const handleCheck = idx => {
    setChecked(prev =>
      prev.map((val, i) => (i === idx ? !val : val))
    );
  };

  let status = '';

  if (period === 'week') {
    const checkedCount = checked.filter(Boolean).length;
    const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
    const daysLeft = checked.slice(todayIdx).filter(val => !val).length;

    if (checkedCount >= times) {
      status = 'done';
    } else if (checkedCount + daysLeft >= times) {
      status = 'on track';
    } else {
      status = 'missed';
    }
  } else if (period === 'day') {
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
    <div className="task">
      <div className="title rowBox">{task}, {times} times per {period}</div>
      <div className="checkboxes">
        {Array.from({ length: 7 }).map((_, idx) => (
          <div className="checkbox rowBox" key={idx}>
            <input
              type="checkbox"
              checked={checked[idx]}
              onChange={() => handleCheck(idx)}
            />
          </div>
        ))}
      </div>
      <div className="status rowBox">{status}</div>
    </div>
  );
}
export default Task;