/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Clasificacion.css';

// Lista de nombres de los equipos y sus IDs (ajustar según los IDs reales de los escudos)
const teamNames = {
  "1": "Athletic Club",
  "2": "Atlético de Madrid",
  "3": "Osasuna",
  "4": "Leganés",
  "5": "Alavés",
  "6": "FC Barcelona",
  "7": "Getafe",
  "8": "Girona",
  "9": "Rayo Vallecano",
  "10": "Celta",
  "11": "RCD Espanyol",
  "12": "RCD Mallorca",
  "13": "Real Betis",
  "14": "Real Madrid CF",
  "15": "Real Sociedad",
  "16": "Real Valladolid",
  "17": "Sevilla CF",
  "18": "Las Palmas",
  "19": "Valencia CF",
  "20": "Villarreal CF"
};

const Clasificacion = () => {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/clasificacion')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verifica aquí la estructura de los datos
        setEquipos(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
  <div className="home">
    {/* Navbar */}
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">La Liga</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/partidos">Partidos</Link></li>
        <li><Link to="/clasificacion">Clasificación</Link></li>
        <li><Link to="/estadisticas-equipos">Estadísticas Equipos</Link></li>
        <li><Link to="/estadisticas-jugadores">Estadísticas Jugadores</Link></li>
        <li><Link to="/noticias">Noticias</Link></li>
        <li><Link to="/calendario">Calendario</Link></li>
      </ul>
    </nav>

    {/* Clasificacion */}
    <div className="clasificacion-container">
      <h1>Clasificación de Equipos</h1>
      <table className="clasificacion-table">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Equipo</th>
            <th>J</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>GF</th>
            <th>GC</th>
            <th>DG</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map((equipo, index) => (
            <tr key={equipo.id}>
              <td>{index + 1}</td>
              <td className="equipo-col">
                <img 
                  src={`http://localhost:3002/escudos/${equipo.id}.png`} 
                  alt={`escudo ${teamNames[equipo.id]}`} 
                  className="escudo"
                />
                {teamNames[equipo.id]}
              </td>
              <td>{equipo.partidos_jugados}</td>
              <td>{equipo.partidos_ganados}</td>
              <td>{equipo.partidos_empatados}</td>
              <td>{equipo.partidos_perdidos}</td>
              <td>{equipo.goles_a_favor}</td>
              <td>{equipo.goles_en_contra}</td>
              <td>{equipo.goles_a_favor - equipo.goles_en_contra}</td>
              <td>{equipo.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Clasificacion;