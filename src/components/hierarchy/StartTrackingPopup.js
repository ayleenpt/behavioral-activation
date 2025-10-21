import { useState } from 'react';
import { Interval } from '../model/Interval';
import '../../styles/hierarchy/TrackingPopup.css';

function StartTrackingPopup({ taskName, onSubmit, onCancel }) {
  const [count, setCount] = useState('');
  // always use weekly cadence
  const [interval, setInterval] = useState('week');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const countNumber = Number(count);
    if (isNaN(countNumber) || countNumber <= 0) {
      setError("please enter a number greater than 0");
      return;
    }

    if (interval === Interval.WEEK && countNumber > 7) {
      setError("can't track more than 7 times per week");
      return;
    }

    onSubmit({ count: countNumber, interval });
  };

  return (
    <div className="tracking-popup-overlay">
      <div className="tracking-popup">
        <h3>start tracking "{taskName}"</h3>
        <div className="form-group">
          <input
            className="count-input"
            type="number"
            min="1"
            value={count}
            onChange={e => setCount(e.target.value)}
          />
          <label>times per week</label>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="popup-buttons">
          <button onClick={handleSubmit}>Start</button>
          <button onClick={onCancel} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default StartTrackingPopup;
