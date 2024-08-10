import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Matches from './Matches';
import Statistics from './Statistics';
import News from './News';
import MatchesCalendar from './MatchesCalendar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/news" element={<News />} />
          <Route path="/calendar" element={<MatchesCalendar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;