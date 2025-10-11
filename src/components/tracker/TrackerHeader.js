import Day from './Day';
import Styles from '../../styles/Styles.module.css';
import '../../styles/tracker/TrackerHeader.css';

function TrackerHeader() {
  const getWeekDates = () => {
    const today = new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return d;
    });
  }

  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const weekDates = getWeekDates();
  const today = new Date();

  return (
    <div className={`tracker-header ${Styles.blueTrackerHeader}`}>
      <div className="header-days">
        <div className="header-label task-frequency-header">task</div>
          {weekDates.map((dateObj, idx) => (
            <Day
              key={idx}
              weekday={weekdays[idx]}
              date={`${dateObj.getMonth() + 1}/${dateObj.getDate()}`}
              isToday={
                dateObj.getDate() === today.getDate() &&
                dateObj.getMonth() === today.getMonth() &&
                dateObj.getFullYear() === today.getFullYear()
              }
            />
          ))}
        <div className="header-label status-header">status</div>
      </div>
    </div>
  );
} export default TrackerHeader;