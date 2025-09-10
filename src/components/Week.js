import React, { useState } from 'react';
import Task from './Task';
import '../styles/Week.css';

function Week() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [newTimes, setNewTimes] = useState(1);
  const [newPeriod, setNewPeriod] = useState('week');

  const handleAddTask = () => setShowModal(true);

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!newTask || newTimes < 1) return;
    setTasks([...tasks, { task: newTask, times: newTimes, period: newPeriod }]);
    setShowModal(false);
    setNewTask('');
    setNewTimes(1);
    setNewPeriod('week');
  };

  const handleModalClose = () => {
    setShowModal(false);
    setNewTask('');
    setNewTimes(1);
    setNewPeriod('week');
  };

  return (
    <div className="week">
      <div className="days">
        <div className="gap" />
        <div className="day">Mon</div>
        <div className="day">Tue</div>
        <div className="day">Wed</div>
        <div className="day">Thu</div>
        <div className="day">Fri</div>
        <div className="day">Sat</div>
        <div className="day">Sun</div>
      </div>
      {tasks.map((t, idx) => (
        <Task key={idx} task={t.task} times={t.times} period={t.period} />
      ))}
      <button className="add-task" onClick={handleAddTask}>Add Task</button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <form onSubmit={handleModalSubmit}>
              <h2>What task do you want to accomplish this week?</h2>
              <input
                type="text"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                placeholder="Enter task"
                required
                autoFocus
              />
              <div style={{ margin: '1em 0' }}>
                Do this task&nbsp;
                <input
                  type="number"
                  min="1"
                  value={newTimes}
                  onChange={e => setNewTimes(Number(e.target.value))}
                  style={{ width: '3em' }}
                  required
                />
                &nbsp;times per&nbsp;
                <select
                  value={newPeriod}
                  onChange={e => setNewPeriod(e.target.value)}
                >
                  <option value="day">day</option>
                  <option value="week">week</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '1em', justifyContent: 'flex-end' }}>
                <button type="button" onClick={handleModalClose}>Cancel</button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default Week;