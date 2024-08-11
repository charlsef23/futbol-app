// src/components/EstadisticasEquipo.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// src/components/EstadisticasEquipo.js
import './EstadisticasEquipo.css';

function EstadisticasEquipo() {
  const [estadisticas, setEstadisticas] = useState([]);

  useEffect(() => {
    axios.get('/api/estadisticas/equipo')
      .then(response => setEstadisticas(response.data))
      .catch(error => console.error('Error cargando estadísticas de equipo:', error));
  }, []);

  return (
    <div>
      <h1>Estadísticas de Equipos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre del Equipo</th>
            <th>Partidos Jugados</th>
            <th>Victorias</th>
            <th>Derrotas</th>
            <th>Goles a Favor</th>
            <th>Goles en Contra</th>
          </tr>
        </thead>
        <tbody>
          {estadisticas.map(est => (
            <tr key={est.id_estadisticas_equipo}>
              <td>{est.nombre_equipo}</td>
              <td>{est.partidos_jugados}</td>
              <td>{est.victorias}</td>
              <td>{est.derrotas}</td>
              <td>{est.goles_favor}</td>
              <td>{est.goles_contra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EstadisticasEquipo;