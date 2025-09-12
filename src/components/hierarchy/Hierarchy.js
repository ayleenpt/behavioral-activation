import { useState, useEffect } from 'react';
import HierarchyRow from './HierarchyRow';
import AddTask from './AddTask';
import HierarchyHeader from './HierarchyHeader';
import '../../styles/hierarchy/Hierarchy.css';

function Hierarchy({ category }) {
  console.log('Hierarchy category:', category);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch(`http://localhost:5000/api/tasks?category=${category}`)
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
    <div className="hierarchy">
      <div className="categories">
        {['routine', 'enjoyment', 'value'].map(cat => (
          <button
            key={cat}
            className={`category${cat === category ? ' selected-category' : ''}`}
            onClick={() => window.location.href = `/#/${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AddTask refreshTasks={fetchTasks} category={category} />

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