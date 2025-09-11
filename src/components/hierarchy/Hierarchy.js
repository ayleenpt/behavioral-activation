import HierarchyRow from './HierarchyRow';
import '../../styles/hierarchy/Hierarchy.css';

function Hierarchy({ category = "Default Category" }) {
  return (
    <div className="hierarchy">
      <div className="category">{category}</div>
      <div className="grid">
        <HierarchyRow difficulty={1} task="task" />
      </div>
    </div>
  );
} export default Hierarchy;