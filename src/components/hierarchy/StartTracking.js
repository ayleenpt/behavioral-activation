import { useState } from 'react';
import { Frequency } from '../task/Frequency';
import '../../styles/hierarchy/StartTracking.css';

function StartTracking({ className, task, refreshTasks, }) {
  const [tracking, setTracking] = useState(task.tracking)

  const toggleTracking = () => {
    const shouldTrack = !tracking;
    if (!shouldTrack && !window.confirm(`Are you sure you want to stop tracking "${task.taskName}"?`)) {
      return;
    }

    var body = { ...task, tracking: shouldTrack };

    if (shouldTrack) {
      let count = window.prompt('Enter count per interval (must be a number > 0):');
      if (count === null) return;
      count = Number(count);
      if (isNaN(count) || count <= 0) {
        alert('Invalid count. Please enter a number greater than 0.');
        return;
      }

      let interval = window.prompt('Enter interval: "day" or "week"');
      if (interval === null) return;
      interval = interval.toLowerCase();
      if (interval !== 'day' && interval !== 'week') {
        alert('Invalid interval. Please enter "day" or "week".');
        return;
      }
      const frequency = Frequency(count, interval);
      body.frequency = frequency;
    }

    setTracking(shouldTrack);
    fetch(`http://localhost:8080/api/tasks/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(updated => {
        if (refreshTasks) refreshTasks();
      })
      .catch(err => console.error(err));
  };
  
  return (
    <div className={`${className ? className + ' ' : ''}start-tracking`}>
      <button
        className="start-tracking-button"
        onClick={toggleTracking}
      >
        {tracking ? 'stop' : 'start'} tracking
      </button>
    </div>
  );
} export default StartTracking;