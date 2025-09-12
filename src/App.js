import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Tracker from './components/tracker/Tracker';
import Hierarchy from './components/hierarchy/Hierarchy';
import './App.css';

function App() {
  const [valueTasks, setValueTasks] = useState([]);
  const [enjoymentTasks, setEnjoymentTasks] = useState([]);
  const [routineTasks, setRoutineTasks] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Tracker />} />

          <Route
            path="/enjoyment"
            element={
              <Hierarchy
                category="enjoyment" tasks={enjoymentTasks} setTasks={setEnjoymentTasks}
              />
            }
          />

          <Route
            path="/value"
            element={
              <Hierarchy
                category="value" tasks={valueTasks} setTasks={setValueTasks}
              />
            }
          />

          <Route
            path="/routine"
            element={
              <Hierarchy
                category="routine" tasks={routineTasks} setTasks={setRoutineTasks}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
