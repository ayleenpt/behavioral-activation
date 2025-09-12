import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Tracker from './components/tracker/Tracker';
import Hierarchy from './components/hierarchy/Hierarchy';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/tracker/value" replace />} />

          {/* Tracker Routes */}
          <Route
            path="/tracker/enjoyment"
            element={ <Tracker category="enjoyment" /> }
          />
          <Route
            path="/tracker/value"
            element={ <Tracker category="value" /> }
          />
          <Route
            path="/tracker/routine"
            element={ <Tracker category="routine" /> }
          />

          {/* Hierarchy Routes */}
          <Route
            path="/hierarchy/enjoyment"
            element={ <Hierarchy category="enjoyment" /> }
          />
          <Route
            path="/hierarchy/value"
            element={ <Hierarchy category="value" /> }
          />
          <Route
            path="/hierarchy/routine"
            element={ <Hierarchy category="routine" /> }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
