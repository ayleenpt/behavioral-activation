import React, { useState } from 'react';
import '../styles/Task.css';

function Task({task, times, period}) {
  const [checked, setChecked] = useState(Array(7).fill(false));

  const handleCheck = idx => {
    setChecked(prev =>
      prev.map((val, i) => (i === idx ? !val : val))
    );
  };

  // Count how many boxes are checked
  const checkedCount = checked.filter(Boolean).length;

  // Determine if "done" should be shown
  let isDone = false;
  if (period === 'week') {
    isDone = checkedCount >= times;
  } else if (period === 'day') {
    isDone = checked.every(Boolean);
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
      <div className="status rowBox">{isDone ? 'done' : ''}</div>
    </div>
  );
} export default Task;