// src/components/Clasificacion.js
import React, { useEffect, useState } from 'react';
import '../styles/Clasificacion.css';

const Clasificacion = () => {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/clasificacion')
      .then(response => response.json())
      .then(data => setEquipos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const calcularDiferenciaGoles = (golesFavor, golesContra) => {
    return golesFavor - golesContra;
  };

  return (
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
              <td>{equipo.nombre}</td>
              <td>{equipo.partidos_jugados}</td>
              <td>{equipo.partidos_ganados}</td>
              <td>{equipo.partidos_empatados}</td>
              <td>{equipo.partidos_perdidos}</td>
              <td>{equipo.goles_a_favor}</td>
              <td>{equipo.goles_en_contra}</td>
              <td>{calcularDiferenciaGoles(equipo.goles_a_favor, equipo.goles_en_contra)}</td>
              <td>{equipo.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clasificacion;