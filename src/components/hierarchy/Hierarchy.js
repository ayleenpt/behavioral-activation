import { useState, useEffect } from 'react';
import Pages from '../navigation/Pages';
import Categories from '../navigation/Categories';
import HierarchyRow from './HierarchyRow';
import AddTask from './AddTask';
import HierarchyHeader from './HierarchyHeader';
import '../../styles/hierarchy/Hierarchy.css';

function Hierarchy({ category }) {
  console.log('Hierarchy category:', category);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch(`http://localhost:8080/api/tasks?category=${category}`)
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        console.log('Tasks:', data);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchTasks();
  }, [category]);

  return (
    <div className="hierarchy">
      <Pages baseUrl="hierarchy" category={category} />
      <Categories baseUrl="hierarchy" category={category} />

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