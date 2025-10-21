import React, { useState } from 'react';
import { Interval } from '../model/Interval';
import Styles from '../../styles/Styles.module.css';
import '../../styles/tracker/TrackerRow.css';

function Task({ task, refreshTasks }) {
  const [checked, setChecked] = useState(Array(7).fill(false));
  var interval = task.frequency && task.frequency.interval;
  const count = (task.frequency && task.frequency.count) || 1;

  const handleCheck = idx => {
    setChecked(prev =>
      prev.map((val, i) => (i === idx ? !val : val))
    );
  };
  
  let percent = 0;

  const checkedCount = checked.filter(Boolean).length;
  percent = Math.round((Math.min(checkedCount, count) / count) * 100);

  const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  const daysLeft = checked.slice(todayIdx).filter(val => !val).length;

  return (
    <div className="tracker-row">
  <div className={`tracker-row-title tracker-row-box ${Styles.blueTrackerRow}`}>{task.taskName}, {count} times per week</div>
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
      <div className={`tracker-row-status tracker-row-box ${Styles.blueTrackerRow}`}>
        <div className="status-percent">{percent}%</div>
        <div className="status-bar">
          {(() => {
            let fillColor = '#e57373';
            if (percent >= 100) fillColor = '#4caf50';
            else if (percent >= 50) fillColor = '#ffb74d';
            return <div className="status-fill" style={{ width: `${percent}%`, background: fillColor }} />;
          })()}
        </div>
      </div>
    </div>
  );
} export default Task;