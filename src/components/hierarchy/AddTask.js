import { useState } from 'react';
import Styles from '../../styles/Styles.module.css';
import '../../styles/hierarchy/AddTask.css';

function AddTask({ refreshTasks, category }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      fetch('http://localhost:8080/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskName: `${input.trim()}`,
          category: category,
        })
      })
        .then(res => {
          if (res.ok) {
            setInput('');
            if (refreshTasks) refreshTasks();
          }
        });
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
      <button className={`add-task-button ${Styles.blueBackground}`} onClick={handleAdd}>
        add task
      </button>
    </div>
  );
}
export default AddTask;