import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaFutbol, FaChartBar, FaNewspaper, FaCalendarAlt } from 'react-icons/fa'; // Asegúrate de que esta importación es correcta

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Bienvenido al Dashboard de Fútbol</h1>
        <p>Explora las diferentes secciones para obtener información sobre partidos, estadísticas, noticias y más.</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/partidos">
              <FaFutbol className="icon" />
              Partidos
            </Link>
          </li>
          <li>
            <Link to="/estadisticas-equipos">
              <FaChartBar className="icon" />
              Estadísticas de Equipos
            </Link>
          </li>
          <li>
            <Link to="/estadisticas-jugadores">
              <FaChartBar className="icon" />
              Estadísticas de Jugadores
            </Link>
          </li>
          <li>
            <Link to="/noticias">
              <FaNewspaper className="icon" />
              Noticias
            </Link>
          </li>
          <li>
            <Link to="/calendario">
              <FaCalendarAlt className="icon" />
              Calendario
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;