import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Partidos from './components/Partidos';
import EstadisticasEquipos from './components/EstadisticasEquipos';
import EstadisticasJugadores from './components/EstadisticasJugadores';
import Noticias from './components/Noticias';
import Calendario from './components/Calendario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partidos" element={<Partidos />} />
        <Route path="/estadisticas-equipos" element={<EstadisticasEquipos />} />
        <Route path="/estadisticas-jugadores" element={<EstadisticasJugadores />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </Router>
  );
}

export default App;