import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/EstadisticasJugadores.css'; // Nota el cambio a '../styles/EstadisticasJugadores.css'

const EstadisticasJugadores = () => {
  const [estadisticasJugadores, setEstadisticasJugadores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/estadisticas-jugadores')
      .then(response => setEstadisticasJugadores(response.data))
      .catch(error => console.error('Error fetching estadisticas jugadores:', error));
  }, []);

  return (
    <div className="estadisticas-jugadores">
      <h2>Estadísticas de Jugadores</h2>
      <ul>
        {estadisticasJugadores.map(est => (
          <li key={est.id}>Jugador ID: {est.jugador_id} - Estadística: {est.estadistica} - Valor: {est.valor}</li>
        ))}
      </ul>
    </div>
  );
};

export default EstadisticasJugadores;