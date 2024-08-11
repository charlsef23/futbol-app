import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/EstadisticasEquipos.css'; // Nota el cambio a '../styles/EstadisticasEquipos.css'

const EstadisticasEquipos = () => {
  const [estadisticasEquipos, setEstadisticasEquipos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/estadisticas-equipos')
      .then(response => setEstadisticasEquipos(response.data))
      .catch(error => console.error('Error fetching estadisticas equipos:', error));
  }, []);

  return (
    <div className="estadisticas-equipos">
      <h2>Estadísticas de Equipos</h2>
      <ul>
        {estadisticasEquipos.map(est => (
          <li key={est.id}>Equipo ID: {est.equipo_id} - Estadística: {est.estadistica} - Valor: {est.valor}</li>
        ))}
      </ul>
    </div>
  );
};

export default EstadisticasEquipos;