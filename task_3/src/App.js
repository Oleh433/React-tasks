import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PalettePage from './pages/PalettePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/palette/:id" element={<PalettePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
