import { useState } from 'react';
import HierarchyRow from './HierarchyRow';
import AddTask from './AddTask';
import HierarchyHeader from './HierarchyHeader';
import '../../styles/hierarchy/Hierarchy.css';

function Hierarchy({ category = "Default Category" }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { task, difficulty: 0 }]);
  };

  const deleteTask = (idx) => {
    setTasks(tasks => tasks.filter((_, i) => i !== idx));
  };

  return (
    <div className="hierarchy">
      <div className="category">{category}</div>
      <AddTask onAdd={addTask} />

      <div className="grid">
        <HierarchyHeader />
        {tasks.map((t, idx) => (
          <HierarchyRow key={idx} task={t.task} onDelete={() => deleteTask(idx)} />
        ))}
      </div>
    </div>
  );
}
export default Hierarchy;