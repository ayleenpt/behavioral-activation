import { useState } from 'react';
import Difficulty from './Difficulty';
import StartTracking from './StartTracking';
import '../../styles/hierarchy/HierarchyRow.css';

function HierarchyRow({ task, onDelete }) {
  const [difficulty, setDifficulty] = useState(task.difficulty);
  const [tracking, setTracking] = useState(task.tracking)

  const handleDifficultyChange = (val) => {
    setDifficulty(val);
    task.difficulty = val;
  };

  const toggleTracking = (task) => {
    const shouldTrack = !(task.tracking)
    setTracking(shouldTrack)
    task.tracking = shouldTrack
  };

  return (
    <div className="hierarchy-row">
      <Difficulty
        className="hierarchy-box"
        difficulty={difficulty}
        setDifficulty={handleDifficultyChange}
      />

      <div className="hierarchy-box task-label">{task.taskName}</div>

      <StartTracking
        className="hierarchy-box"
        tracking={tracking}
        onClick={() => toggleTracking(task)}
      />

      <div className="hierarchy-box delete-hierarchy-row">
        <button className="delete-button" onClick={onDelete}>x</button>
      </div>
    </div>
  );
}
export default HierarchyRow;