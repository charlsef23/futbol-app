import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/EstadisticasEquipos.css'; // Nota el cambio a '../styles/EstadisticasEquipos.css'
import { Link } from 'react-router-dom';
import logo from '../assets/images/la_liga.png';

const EstadisticasEquipos = () => {
  const [estadisticasEquipos, setEstadisticasEquipos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/estadisticas-equipos')
      .then(response => setEstadisticasEquipos(response.data))
      .catch(error => console.error('Error fetching estadisticas equipos:', error));
  }, []);

  return (
  <div>
    <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-image" />
          </Link>
        </div>
        <ul className="navbar-menu">
          <li><Link to="/partidos">Partidos</Link></li>
          <li><Link to="/clasificacion">Clasificación</Link></li>
          <li><Link to="/estadisticas-equipos">Estadísticas Equipos</Link></li>
          <li><Link to="/noticias">Noticias</Link></li>
          <li><Link to="/calendario">Calendario</Link></li>
        </ul>
      </nav>
    <div className="estadisticas-equipos">
      <h2>Estadísticas de Equipos</h2>
      <ul>
        {estadisticasEquipos.map(est => (
          <li key={est.id}>Equipo ID: {est.equipo_id} - Estadística: {est.estadistica} - Valor: {est.valor}</li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default EstadisticasEquipos;