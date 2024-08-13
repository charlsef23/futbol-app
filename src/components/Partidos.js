import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Partidos.css';

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

const Partidos = () => {
  const [partidos, setPartidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3002/api/partidos')
      .then(response => {
        setPartidos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching partidos:', error);
        setError('Error fetching partidos data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Cargando partidos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="partidos">
      <h2>Partidos</h2>
      <ul className="partidos-list">
        {partidos.map(partido => (
          <li key={partido.id} className="partido-item">
            <div className="fecha-hora">
              {partido.fecha}
            </div>
            <div className="partido-details">
              <div className="equipo equipo-local">
                <img 
                  src={`http://localhost:3002/escudos/${partido.equipo_local_id}.png`} 
                  alt={`escudo ${teamNames[partido.equipo_local_id]}`} 
                  className="escudo" 
                />
                <span className="nombre-equipo">{teamNames[partido.equipo_local_id]}</span>
                <span className="resultado">{partido.resultado.split('-')[0]}</span>
              </div>
              <span className="vs">vs</span>
              <div className="equipo equipo-visitante">
                <img 
                  src={`http://localhost:3002/escudos/${partido.equipo_visitante_id}.png`} 
                  alt={`escudo ${teamNames[partido.equipo_visitante_id]}`} 
                  className="escudo" 
                />
                <span className="nombre-equipo">{teamNames[partido.equipo_visitante_id]}</span>
                <span className="resultado">{partido.resultado.split('-')[1]}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partidos;