import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Matches from './components/Matches';
import Statistics from './components/Statistics';
import News from './components/News';
import MatchesCalendar from './components/MatchesCalendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/news" element={<News />} />
        <Route path="/calendar" element={<MatchesCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;