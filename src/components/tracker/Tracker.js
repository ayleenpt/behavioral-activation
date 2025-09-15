import { useState, useEffect } from 'react';
import Header from '../user/Header';
import TrackerHeader from './TrackerHeader';
import Pages from '../navigation/Pages';
import Categories from '../navigation/Categories';
import TrackerRow from './TrackerRow';
import '../../styles/tracker/Tracker.css';

function Tracker({ category }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch(`http://localhost:8080/api/tasks?category=${category}`)
      .then(res => res.json())
      .then(data => {
        setTasks(data);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, [category]);

  return (
    <div className="tracker">
      <Header />
      <Pages baseUrl="tracker" category={category} />
      <Categories baseUrl="tracker" category={category} />
      <div className="tracker-grid">
        <TrackerHeader />
        {tasks.map((t) => (
          <TrackerRow
            key={t._id}
            task={t}
            refreshTasks={fetchTasks}
          />
        ))}
      </div>
    </div>
  )
} export default Tracker