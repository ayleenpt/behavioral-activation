import '../../styles/hierarchy/AddTask.css';

function AddTask({ onClick }) {
  return (
    <div className="add-task">
        <input
          className="add-task-input"
          type="text"
        />
        
        <button
          className="add-task-button"
          onClick={onClick}
        >
          add task
        </button>
      </div>
  );
} export default AddTask;