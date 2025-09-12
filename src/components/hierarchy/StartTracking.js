import '../../styles/hierarchy/StartTracking.css';

function StartTracking({ className, tracking, onClick }) {
  return (
    <div className={`${className ? className + ' ' : ''}start-tracking`}>
      <button
        className="start-tracking-button"
        onClick={onClick}
      >
        {tracking ? 'stop' : 'start'} tracking
      </button>
    </div>
  );
} export default StartTracking;