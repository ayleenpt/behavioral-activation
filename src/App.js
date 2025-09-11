import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Tracker from './components/Tracker';
import Hierarchy from './components/hierarchy/Hierarchy';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Tracker />} />
          <Route path="/enjoyment" element={<Hierarchy category="Enjoyment"/>} />
          <Route path="/value" element={<Hierarchy category="Value"/>} />
          <Route path="/routine" element={<Hierarchy category="Routine"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
