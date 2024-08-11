// src/components/EstadisticasJugador.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// src/components/EstadisticasJugador.js
import './EstadisticasJugador.css';

function EstadisticasJugador() {
  const [estadisticas, setEstadisticas] = useState([]);

  useEffect(() => {
    axios.get('/api/estadisticas/jugador')
      .then(response => setEstadisticas(response.data))
      .catch(error => console.error('Error cargando estadísticas de jugador:', error));
  }, []);

  return (
    <div>
      <h1>Estadísticas de Jugadores</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre del Jugador</th>
            <th>Partidos Jugados</th>
            <th>Goles</th>
            <th>Asistencias</th>
            <th>Tarjetas Amarillas</th>
            <th>Tarjetas Rojas</th>
            <th>Minutos Jugados</th>
          </tr>
        </thead>
        <tbody>
          {estadisticas.map(est => (
            <tr key={est.id_estadisticas_jugador}>
              <td>{est.nombre_jugador}</td>
              <td>{est.partidos_jugados}</td>
              <td>{est.goles}</td>
              <td>{est.asistencias}</td>
              <td>{est.tarjetas_amarillas}</td>
              <td>{est.tarjetas_rojas}</td>
              <td>{est.minutos_jugados}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EstadisticasJugador;