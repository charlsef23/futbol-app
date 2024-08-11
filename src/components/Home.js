import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido al Dashboard de Fútbol</h1>
      <nav>
        <ul>
          <li><Link to="/matches">Partidos</Link></li>
          <li><Link to="/statistics">Estadísticas</Link></li>
          <li><Link to="/news">Noticias</Link></li>
          <li><Link to="/calendar">Calendario</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;