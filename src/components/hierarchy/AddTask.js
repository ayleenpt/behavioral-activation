import { useState } from 'react';
import '../../styles/hierarchy/AddTask.css';

function AddTask({ onAdd }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
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
      
      <button
        className="add-task-button"
        onClick={handleAdd}
      >
        add task
      </button>
    </div>
  );
}
export default AddTask;