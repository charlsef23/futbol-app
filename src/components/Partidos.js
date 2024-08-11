import React, { useEffect, useState } from 'react';
import axios from 'axios';
// src/components/Partidos.js
import './Partidos.css';

function Partidos() {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    // Cargar partidos desde el backend
    axios.get('/api/partidos')
      .then(response => setPartidos(response.data))
      .catch(error => console.error('Error cargando partidos:', error));
  }, []);

  return (
    <div>
      <h1>Partidos</h1>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Equipo Local</th>
            <th>Equipo Visitante</th>
            <th>Goles Local</th>
            <th>Goles Visitante</th>
          </tr>
        </thead>
        <tbody>
          {partidos.map(partido => (
            <tr key={partido.id_partido}>
              <td>{partido.fecha}</td>
              <td>{partido.equipo_local}</td>
              <td>{partido.equipo_visitante}</td>
              <td>{partido.goles_local}</td>
              <td>{partido.goles_visitante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Partidos;