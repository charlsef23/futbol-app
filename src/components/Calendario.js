// src/components/Calendario.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendario.css';

const Calendario = () => {
  return (
    <div className="calendario">
      <h1>Calendario de Partidos</h1>
      <div className="calendar-container">
        <Calendar />
      </div>
      <div className="eventos">
        <h2>Eventos Próximos</h2>
        <ul>
          <li>Partido 1 - Fecha</li>
          <li>Partido 2 - Fecha</li>
          {/* Añade más eventos según sea necesario */}
        </ul>
      </div>
    </div>
  );
};

export default Calendario;