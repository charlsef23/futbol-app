// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Partidos from './components/Partidos';
import Noticias from './components/Noticias';
import NoticiaDetalle from './components/NoticiaDetalle'; // Asegúrate de que este componente exista
import Calendario from './components/Calendario';
import Clasificacion from './components/Clasificacion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partidos" element={<Partidos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<NoticiaDetalle />} /> {/* Ruta para detalle de noticia */}
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/clasificacion" element={<Clasificacion />} />
      </Routes>
    </Router>
  );
}

export default App;