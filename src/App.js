import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Tracker from './components/tracker/Tracker';
import Hierarchy from './components/hierarchy/Hierarchy';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Tracker />} />

          <Route
            path="/hierarchy/enjoyment"
            element={
              <Hierarchy category="enjoyment" />
            }
          />

          <Route
            path="/hierarchy/value"
            element={
              <Hierarchy category="value" />
            }
          />

          <Route
            path="/hierarchy/routine"
            element={
              <Hierarchy category="routine" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
