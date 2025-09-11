import '../../styles/hierarchy/StartTracking.css';

function StartTracking({ className, onClick }) {
  return (
    <div className={`${className ? className + ' ' : ''}start-tracking`}>
      <button
        className="start-tracking-button"
        onClick={onClick}
      >
        start tracking
      </button>
    </div>
  );
} export default StartTracking;