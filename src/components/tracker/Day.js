import Styles from '../../styles/Styles.module.css';
import '../../styles/tracker/Day.css';

function Day({ weekday, date, isToday }) {
  return (
    <div className={`day ${isToday ? Styles.blueDay : ''}`}>
      <div className="date">{date}</div>
      <div className="weekday">{weekday}</div>
    </div>
  );
}
export default Day;