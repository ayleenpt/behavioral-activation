import { useState } from 'react';
import Difficulty from './Difficulty';
import StartTracking from './StartTracking';
import '../../styles/hierarchy/HierarchyRow.css';

function HierarchyRow({ task }) {
  const [difficulty, setDifficulty] = useState(1);

  const startTracking=() => {
    alert(`Started tracking ${task}`);
  }

  return (
    <div className="hierarchy-row">

      <Difficulty
        className="hierarchy-box"
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      <div className="hierarchy-box task">{task}</div>
      
      <StartTracking className="hierarchy-box" onClick={startTracking} />
    </div>
  );
} export default HierarchyRow;