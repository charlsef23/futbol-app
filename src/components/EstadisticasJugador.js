// src/components/EstadisticasJugadores.js
import React from 'react';
import './EstadisticasJugadores.css';

const EstadisticasJugadores = () => {
  return (
    <div className="estadisticas-jugadores">
      <h1>Estadísticas de Jugadores</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre del Jugador</th>
            <th>Equipo</th>
            <th>Partidos Jugados</th>
            <th>Goles</th>
            <th>Asistencias</th>
            <th>Tarjetas Amarillas</th>
            <th>Tarjetas Rojas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jugador A</td>
            <td>Equipo A</td>
            <td>10</td>
            <td>8</td>
            <td>5</td>
            <td>2</td>
            <td>0</td>
          </tr>
          {/* Añade más filas según sea necesario */}
        </tbody>
      </table>
    </div>
  );
};

export default EstadisticasJugadores;