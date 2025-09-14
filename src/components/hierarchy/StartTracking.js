import { useState } from 'react';
import StartTrackingPopup from './StartTrackingPopup';
import StopTrackingPopup from './StopTrackingPopup';
import { Frequency } from '../model/Frequency';
import '../../styles/hierarchy/StartTracking.css';

function StartTracking({ className, task, refreshTasks }) {
  const [tracking, setTracking] = useState(task.tracking);
  const [startPopup, setStartPopup] = useState(false);
  const [stopPopup, setStopPopup] = useState(false);

  const handleStartTracking = () => {
    setStartPopup(true);
  };

  const handleStartSubmit = ({ count, interval }) => {
    const frequency = Frequency(count, interval);
    setTracking(true);
    setStartPopup(false);
    fetch(`http://localhost:8080/api/tasks/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...task, tracking: true, frequency })
    })
      .then(res => res.json())
      .then(() => {
        if (refreshTasks) refreshTasks();
      })
      .catch(err => console.error(err));
  };

  const handleStartCancel = () => {
    setStartPopup(false);
  };

  const handleStopTracking = () => {
    setStopPopup(true);
  };

  const handleStopSubmit = () => {
    setTracking(false);
    setStopPopup(false);
    fetch(`http://localhost:8080/api/tasks/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...task, tracking: false })
    })
      .then(res => res.json())
      .then(() => {
        if (refreshTasks) refreshTasks();
      })
      .catch(err => console.error(err));
  }

  const handleStopCancel = () => {
    setStopPopup(false);
  };

  return (
    <div className={`${className ? className + ' ' : ''}start-tracking`}>
      <button
        className="start-tracking-button"
        onClick={tracking ? handleStopTracking : handleStartTracking}
      >
        {tracking ? 'stop' : 'start'} tracking
      </button>
      {startPopup && (
        <StartTrackingPopup
          taskName={task.taskName}
          onSubmit={handleStartSubmit}
          onCancel={handleStartCancel}
        />
      )}
      {stopPopup && (
        <StopTrackingPopup
          taskName={task.taskName}
          onSubmit={handleStopSubmit}
          onCancel={handleStopCancel}
        />
      )}
    </div>
  );
}

export default StartTracking;
