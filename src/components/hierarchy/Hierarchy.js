import { useState, useEffect } from 'react';
import HierarchyRow from './HierarchyRow';
import AddTask from './AddTask';
import HierarchyHeader from './HierarchyHeader';
import '../../styles/hierarchy/Hierarchy.css';

function Hierarchy({ category = "Default Category" }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="hierarchy">
      <div className="category">{category}</div>

  <AddTask refreshTasks={fetchTasks} />

      <div className="hierarchy-grid">
        <HierarchyHeader />
        {tasks.map((t) => (
          <HierarchyRow
            key={t._id}
            task={t}
            refreshTasks={fetchTasks}
          />
        ))}
      </div>
    </div>
  );
}
export default Hierarchy;