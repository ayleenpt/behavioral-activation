import { useState } from 'react';
import HierarchyRow from './HierarchyRow';
import AddTask from './AddTask';
import HierarchyHeader from './HierarchyHeader';
import '../../styles/hierarchy/Hierarchy.css';

function Hierarchy({ category = "Default Category", tasks, setTasks }) {

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (idx) => {
    setTasks(tasks => tasks.filter((_, i) => i !== idx));
  };

  return (
    <div className="hierarchy">
      <div className="category">{category}</div>
      <AddTask onAdd={addTask} />

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