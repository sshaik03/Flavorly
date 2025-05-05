import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router basename="/Flavorly">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
