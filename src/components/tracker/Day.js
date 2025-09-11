import '../../styles/tracker/Day.css';

function Day({ weekday, date, isToday }) {
  return (
    <div className={`day${isToday ? ' today' : ''}`}>
      <div className="date">{date}</div>
      <div className="weekday">{weekday}</div>
    </div>
  );
}
export default Day;