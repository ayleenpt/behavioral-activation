import React, { useState } from 'react';
import Day from './Day';
import Task from './Task';
import '../styles/Week.css';

function getWeekDates() {
  const today = new Date();
  // Get Monday of the current week
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  // Build array of dates for Mon-Sun
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function Week() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [newTimes, setNewTimes] = useState(1);
  const [newPeriod, setNewPeriod] = useState('week');

  const weekDates = getWeekDates();
  const today = new Date();

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

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="week">
      <div className="days">
        <div className="gap-left" />
        {weekDates.map((dateObj, idx) => (
          <Day
            key={idx}
            weekday={weekdays[idx]}
            date={`${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`}
            isToday={
              dateObj.getDate() === today.getDate() &&
              dateObj.getMonth() === today.getMonth() &&
              dateObj.getFullYear() === today.getFullYear()
            }
          />
        ))}
        <div className="gap-right" />
      </div>
      {tasks.map((t, idx) => (
        <Task key={idx} task={t.task} times={t.times} period={t.period} />
      ))}
      <div className="add-task">
        <button
          className="add-task-button"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
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