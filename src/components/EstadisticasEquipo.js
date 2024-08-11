// src/components/EstadisticasEquipos.js
import React from 'react';
import './EstadisticasEquipos.css';

const EstadisticasEquipos = () => {
  return (
    <div className="estadisticas-equipos">
      <h1>Estadísticas de Equipos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre del Equipo</th>
            <th>Partidos Jugados</th>
            <th>Victorias</th>
            <th>Derrotas</th>
            <th>Empates</th>
            <th>Goles a Favor</th>
            <th>Goles en Contra</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Equipo A</td>
            <td>10</td>
            <td>6</td>
            <td>2</td>
            <td>2</td>
            <td>18</td>
            <td>12</td>
          </tr>
          {/* Añade más filas según sea necesario */}
        </tbody>
      </table>
    </div>
  );
};

export default EstadisticasEquipos;