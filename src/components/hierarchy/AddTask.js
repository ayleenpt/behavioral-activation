import { useState } from 'react';
import { Task } from '../task/Task';
import '../../styles/hierarchy/AddTask.css';

function AddTask({ onAdd }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      const task = Task(input.trim(), 1, false, null);
      onAdd(task);
      setInput('');
    }
  };

  return (
    <div className="add-task">
      <input
        className="add-task-input"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') handleAdd(); }}
      />
      <button className="add-task-button" onClick={handleAdd}>
        add task
      </button>
    </div>
  );
}
export default AddTask;