import '../../styles/hierarchy/TrackingPopup.css';

function StopTrackingPopup({ taskName, onSubmit, onCancel }) {
  return (
    <div className="tracking-popup-overlay">
      <div className="tracking-popup">
        <h3>stop tracking "{taskName}"?</h3>
        <div className="popup-buttons">
          <button onClick={onSubmit}>Yes</button>
          <button onClick={onCancel} className="cancel-button">No</button>
        </div>
      </div>
    </div>
  );
}

export default StopTrackingPopup;