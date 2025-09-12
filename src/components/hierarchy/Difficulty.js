import { useState } from 'react';
import '../../styles/hierarchy/Difficulty.css';

function Difficulty({ className, task, refreshTasks, min = 0, max = 7 }) {
  const [difficulty, setDifficulty] = useState(task.difficulty);

  const handleDifficultyChange = (eOrValue) => {
    let val = typeof eOrValue === 'number' ? eOrValue : Number(eOrValue.target.value);
    if (val < min) val = min;
    if (val > max) val = max;

    setDifficulty(val);

    fetch(`http://localhost:8080/api/tasks/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...task, difficulty: val })
    })
      .then(res => res.json())
      .then(updated => {
        if (refreshTasks) refreshTasks();
      })
      .catch(err => console.error(err));
  };

  const increment = () => handleDifficultyChange(difficulty + 1);
  const decrement = () => handleDifficultyChange(difficulty - 1);

  return (
    <div className={`${className} difficulty`}>
      <button
        className="difficulty-adjust"
        onClick={decrement}
        aria-label="Decrease difficulty">
        -
      </button>

      <input
        className="difficulty-input"
        type="number"
        min={min}
        max={max}
        value={difficulty}
        onChange={handleDifficultyChange}
      />
      
      <button
        className="difficulty-adjust"
        onClick={increment}
        aria-label="Increase difficulty">
        +
      </button>
    </div>
  );
} export default Difficulty;