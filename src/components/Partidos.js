import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Partidos.css'; // Nota el cambio a '../styles/Partidos.css'

const Partidos = () => {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/partidos')
      .then(response => setPartidos(response.data))
      .catch(error => console.error('Error fetching partidos:', error));
  }, []);

  return (
    <div className="partidos">
      <h2>Partidos</h2>
      <ul>
        {partidos.map(partido => (
          <li key={partido.id}>{partido.equipo_local_id} vs {partido.equipo_visitante_id} - {partido.fecha} - Resultado: {partido.resultado}</li>
        ))}
      </ul>
    </div>
  );
};

export default Partidos;