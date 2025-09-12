import Day from './Day';
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

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekDates = getWeekDates();
  const today = new Date();

  return (
    <div className="tracker-header">
      <div className="gap-left" />
        {weekDates.map((dateObj, idx) => (
          <Day
            key={idx}
            weekday={weekdays[idx]}
            date={`${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`}
            isToday={
              dateObj.getDate() === today.getDate() &&
              dateObj.getMonth() === today.getMonth() &&
              dateObj.getFullYear() === today.getFullYear()
            }
          />
        ))}
      <div className="gap-right" />
    </div>
  );
} export default TrackerHeader;