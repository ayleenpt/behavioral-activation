import { useState } from 'react';
import Difficulty from './Difficulty';
import '../../styles/hierarchy/HierarchyRow.css';

function HierarchyRow({ task }) {
  const [difficulty, setDifficulty] = useState(1);

  return (
    <div className="hierarchy-row">
      
      <Difficulty
        className="hierarchy-box"
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      <div className="hierarchy-box task">{task}</div>
      <button className="hierarchy-box assign">move to tracker</button>
    </div>
  );
} export default HierarchyRow;