// src/components/MatchesCalendar.js

import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
// src/components/MatchesCalendar.js
import './MatchesCalendar.css';

function MatchesCalendar() {
  const [, setPartidos] = useState([]);

  useEffect(() => {
    // Cargar partidos desde el backend
    axios.get('/api/partidos')
      .then(response => setPartidos(response.data))
      .catch(error => console.error('Error cargando partidos:', error));
  }, []);

  // Lógica para marcar partidos en el calendario

  return (
    <div>
      <h1>Calendario de Partidos</h1>
      <Calendar
        // Aquí puedes añadir lógica para marcar fechas de partidos
      />
    </div>
  );
}

export default MatchesCalendar;