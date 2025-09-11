import HierarchyRow from './HierarchyRow';
import '../../styles/hierarchy/Hierarchy.css';
import AddTask from './AddTask';

function Hierarchy({ category = "Default Category" }) {
  const addTask = () => {
    alert('Add task clicked');
  }

  return (
    <div className="hierarchy">
      <div className="category">{category}</div>

      <AddTask onClick={addTask} />

      <div className="grid">
        <HierarchyRow difficulty={1} task="task" />
      </div>
    </div>
  );
} export default Hierarchy;