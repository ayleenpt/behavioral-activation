import { useState } from 'react';
import StartTrackingPopup from './StartTrackingPopup';
import { Frequency } from '../task/Frequency';
import '../../styles/hierarchy/StartTracking.css';

function StartTracking({ className, task, refreshTasks }) {
  const [tracking, setTracking] = useState(task.tracking);
  const [showPopup, setShowPopup] = useState(false);

  const handleStartTracking = () => {
    setShowPopup(true);
  };

  const handleStopTracking = () => {
    if (window.confirm(`Are you sure you want to stop tracking "${task.taskName}"?`)) {
      const body = { ...task, tracking: false };
      setTracking(false);
      fetch(`http://localhost:8080/api/tasks/${task._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(() => {
          if (refreshTasks) refreshTasks();
        })
        .catch(err => console.error(err));
    }
  };

  const handlePopupSubmit = ({ count, interval }) => {
    const frequency = Frequency(count, interval);
    const body = { ...task, tracking: true, frequency };
    setTracking(true);
    setShowPopup(false);
    fetch(`http://localhost:8080/api/tasks/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(() => {
        if (refreshTasks) refreshTasks();
      })
      .catch(err => console.error(err));
  };

  const handlePopupCancel = () => {
    setShowPopup(false);
  };

  return (
    <div className={`${className ? className + ' ' : ''}start-tracking`}>
      <button
        className="start-tracking-button"
        onClick={tracking ? handleStopTracking : handleStartTracking}
      >
        {tracking ? 'stop' : 'start'} tracking
      </button>
      {showPopup && (
        <StartTrackingPopup
          taskName={task.taskName}
          onSubmit={handlePopupSubmit}
          onCancel={handlePopupCancel}
        />
      )}
    </div>
  );
}

export default StartTracking;
