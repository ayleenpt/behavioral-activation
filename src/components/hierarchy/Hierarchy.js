import { useState, useEffect } from 'react';
import HierarchyRow from './HierarchyRow';
import AddTask from './AddTask';
import HierarchyHeader from './HierarchyHeader';
import '../../styles/hierarchy/Hierarchy.css';

function Hierarchy({ category = "Default Category" }) {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (idx) => {
    setTasks(tasks => tasks.filter((_, i) => i !== idx));
  };


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
        {tasks.map((t, idx) => (
          <HierarchyRow
            key={idx}
            task={t}
            onDelete={() => deleteTask(idx)}
          />
        ))}
      </div>
    </div>
  );
}
export default Hierarchy;