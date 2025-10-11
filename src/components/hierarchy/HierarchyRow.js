import Difficulty from './Difficulty';
import StartTracking from './StartTracking';
import '../../styles/hierarchy/HierarchyRow.css';

function HierarchyRow({ task, refreshTasks }) {

  const deleteTask = () => {
    if (window.confirm(`Are you sure you want to delete "${task.taskName}"? This action cannot be undone.`)) {
      fetch(`http://localhost:8080/api/tasks/${task._id}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (res.ok) refreshTasks();
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="hierarchy-row">
      <Difficulty
        className="hierarchy-box"
        task={task}
        refreshTasks={refreshTasks}
      />

      <div className="hierarchy-box task-label">{task.taskName}</div>

      <StartTracking
        className="hierarchy-box"
        task={task}
        refreshTasks={refreshTasks}
      />

      <div className="hierarchy-box delete-hierarchy-row">
        <button
          className="delete-button"
          onClick={deleteTask}
        >
            x
        </button>
      </div>
    </div>
  );
}
export default HierarchyRow;