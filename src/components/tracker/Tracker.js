import TrackerHeader from './TrackerHeader';
import '../../styles/tracker/Tracker.css';

function Tracker() {
  return (
    <div className="tracker">
      <div className="title">tracker</div>
      <div className="tracker-grid">
        <TrackerHeader />
      </div>
    </div>
  )
} export default Tracker