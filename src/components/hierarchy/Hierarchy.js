import { useState, useEffect } from 'react';
import HierarchyRow from './HierarchyRow';
import AddTask from './AddTask';
import HierarchyHeader from './HierarchyHeader';
import '../../styles/hierarchy/Hierarchy.css';

function Hierarchy({ category = "Default Category" }) {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (task,id) => {
    if (window.confirm(`Are you sure you want to delete this task?\n\n${task}`)) {
      fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (res.ok) fetchTasks();
        })
        .catch(err => console.error(err));
    }
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
        {tasks.map((t) => (
          <HierarchyRow
            key={t._id}
            task={t}
            onDelete={() => deleteTask(t.taskName, t._id)}
          />
        ))}
      </div>
    </div>
  );
}
export default Hierarchy;