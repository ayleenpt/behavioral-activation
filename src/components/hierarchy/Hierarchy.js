import HierarchyRow from './HierarchyRow';
import AddTask from './AddTask';
import '../../styles/hierarchy/Hierarchy.css';
import HierarchyHeader from './HierarchyHeader';

function Hierarchy({ category = "Default Category" }) {
  const addTask = () => {
    alert('Add task clicked');
  }

  return (
    <div className="hierarchy">
      <div className="category">{category}</div>
      <AddTask onClick={addTask} />

      <div className="grid">
        <HierarchyHeader />
        <HierarchyRow difficulty={1} task="task" />
      </div>
    </div>
  );
} export default Hierarchy;