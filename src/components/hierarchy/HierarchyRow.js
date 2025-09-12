import { useState } from 'react';
import Difficulty from './Difficulty';
import StartTracking from './StartTracking';
import '../../styles/hierarchy/HierarchyRow.css';

function HierarchyRow({ task, onDelete }) {
  const [difficulty, setDifficulty] = useState(task.difficulty);

  const handleDifficultyChange = (val) => {
    setDifficulty(val);
    task.difficulty = val;
  };

  const startTracking = () => {
    alert(`Started tracking ${task.taskName}`);
  };

  return (
    <div className="hierarchy-row">
      <Difficulty
        className="hierarchy-box"
        difficulty={difficulty}
        setDifficulty={handleDifficultyChange}
      />
      <div className="hierarchy-box task-label">{task.taskName}</div>
      <StartTracking className="hierarchy-box" onClick={startTracking} />
      <button className="hierarchy-box delete-button" onClick={onDelete}>x</button>
    </div>
  );
}
export default HierarchyRow;