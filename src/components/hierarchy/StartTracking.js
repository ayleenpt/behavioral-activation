import { useState } from 'react';
import '../../styles/hierarchy/StartTracking.css';

function StartTracking({ className, task, refreshTasks, }) {
  const [tracking, setTracking] = useState(task.tracking)

  const toggleTracking = () => {
    const shouldTrack = !tracking;
    setTracking(shouldTrack);
    fetch(`http://localhost:5000/api/tasks/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...task, tracking: shouldTrack })
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