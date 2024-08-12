import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Partidos.css';

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
            <div className="partido-details">
              <img 
                src={`http://localhost:3002/images/${partido.equipo_local_id}.png`} 
                alt={`Escudo ${partido.equipo_local_id}`} 
                className="escudo" 
              />
              <span className="vs">vs</span>
              <img 
                src={`http://localhost:3002/images/${partido.equipo_visitante_id}.png`} 
                alt={`Escudo ${partido.equipo_visitante_id}`} 
                className="escudo" 
              />
            </div>
            <div className="partido-info">
              <span className="fecha">{partido.fecha}</span>
              <span className="resultado">Resultado: {partido.resultado}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partidos;