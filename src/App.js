import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Partidos from './components/Partidos';
import EstadisticasEquipo from './components/EstadisticasEquipo';
import EstadisticasJugador from './components/EstadisticasJugador';
import News from './components/News';
import MatchesCalendar from './components/MatchesCalendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partidos" element={<Partidos />} />
        <Route path="/estadisticas/equipo" element={<EstadisticasEquipo />} />
        <Route path="/estadisticas/jugador" element={<EstadisticasJugador />} />
        <Route path="/news" element={<News />} />
        <Route path="/calendar" element={<MatchesCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;