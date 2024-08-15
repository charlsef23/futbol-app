import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Calendario.css'; // Asegúrate de que la ruta es correcta
import logo from '../assets/images/la_liga.png';

const teamNames = {
  "1": "Athletic Club",
  "2": "Atlético de Madrid",
  "3": "Osasuna",
  "4": "Leganés",
  "5": "Alavés",
  "6": "FC Barcelona",
  "7": "Getafe",
  "8": "Girona",
  "9": "Rayo Vallecano",
  "10": "Celta",
  "11": "RCD Espanyol",
  "12": "RCD Mallorca",
  "13": "Real Betis",
  "14": "Real Madrid CF",
  "15": "Real Sociedad",
  "16": "Real Valladolid",
  "17": "Sevilla CF",
  "18": "Las Palmas",
  "19": "Valencia CF",
  "20": "Villarreal CF"
};

const Calendario = () => {
  const [partidos, setPartidos] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [partidosDelDia, setPartidosDelDia] = useState([]);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);

  // Obtener los partidos desde el backend
  useEffect(() => {
    axios.get('http://localhost:3002/api/partidos')
      .then(response => setPartidos(response.data))
      .catch(error => console.error('Error fetching partidos:', error));
  }, []);

  // Cambiar al mes anterior
  const handlePrevMonth = () => {
    setFechaSeleccionada(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      return newDate;
    });
  };

  // Cambiar al mes siguiente
  const handleNextMonth = () => {
    setFechaSeleccionada(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      return newDate;
    });
  };

  // Manejar la selección de un día
  const handleDayClick = (day) => {
    if (day) {
      const selectedDate = new Date(fechaSeleccionada.getFullYear(), fechaSeleccionada.getMonth(), day);
      const partidosDelDia = partidos.filter(partido => {
        const [day, month, year] = partido.fecha.split(' ')[0].split('/');
        const partidoDate = new Date(`${year}-${month}-${day}`);
        return partidoDate.toDateString() === selectedDate.toDateString();
      });
      setPartidosDelDia(partidosDelDia);
      setDiaSeleccionado(day);
    }
  };

  // Generar los días del calendario
  const daysInMonth = new Date(fechaSeleccionada.getFullYear(), fechaSeleccionada.getMonth() + 1, 0).getDate();
  const firstDay = new Date(fechaSeleccionada.getFullYear(), fechaSeleccionada.getMonth(), 1).getDay();
  
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  // Función para verificar si un día tiene partidos
  const isMatchDay = (day) => {
    const checkDate = new Date(fechaSeleccionada.getFullYear(), fechaSeleccionada.getMonth(), day);
    return partidos.some(partido => {
      const [partidoDay, partidoMonth, partidoYear] = partido.fecha.split(' ')[0].split('/');
      const partidoDate = new Date(`${partidoYear}-${partidoMonth}-${partidoDay}`);
      return partidoDate.toDateString() === checkDate.toDateString();
    });
  };

  return (

    <div className="home">
    {/* Navbar */}
    <nav className="navbar">
    <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-image" />
          </Link>
        </div>
      <ul className="navbar-menu">
        <li><Link to="/partidos">Partidos</Link></li>
        <li><Link to="/clasificacion">Clasificación</Link></li>
        <li><Link to="/estadisticas-equipos">Estadísticas Equipos</Link></li>
        <li><Link to="/noticias">Noticias</Link></li>
        <li><Link to="/calendario">Calendario</Link></li>
      </ul>
    </nav>
    <div className="calendario">
      <div className="calendar-header">
        <button className="nav-button" onClick={handlePrevMonth}>←</button>
        <h2>{fechaSeleccionada.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}</h2>
        <button className="nav-button" onClick={handleNextMonth}>→</button>
      </div>
      <div className="calendar-body">
        <div className="calendar-header-days">
          <div className="calendar-day-name">Dom</div>
          <div className="calendar-day-name">Lun</div>
          <div className="calendar-day-name">Mar</div>
          <div className="calendar-day-name">Mié</div>
          <div className="calendar-day-name">Jue</div>
          <div className="calendar-day-name">Vie</div>
          <div className="calendar-day-name">Sáb</div>
        </div>
        <div className="calendar-grid">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${day ? (day === diaSeleccionado ? 'selected' : isMatchDay(day) ? 'match-day' : '') : 'empty'}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="partidos-del-dia">
        {partidosDelDia.length ? (
          <ul className="partidos-list">
            {partidosDelDia.map(partido => (
              <li key={partido.id} className="partido-item">
                <div className="fecha-hora">
                  {partido.fecha}
                </div>
                <div className="partido-details">
                  <div className="equipo equipo-local">
                    <img 
                      src={`http://localhost:3002/escudos/${partido.equipo_local_id}.png`} 
                      alt={`escudo ${teamNames[partido.equipo_local_id]}`} 
                      className="escudo" 
                    />
                    <span className="nombre-equipo">{teamNames[partido.equipo_local_id]}</span>
                    <span className="resultado">{partido.resultado.split('-')[0]}</span>
                  </div>
                  <span className="vs">vs</span>
                  <div className="equipo equipo-visitante">
                    <img 
                      src={`http://localhost:3002/escudos/${partido.equipo_visitante_id}.png`} 
                      alt={`escudo ${teamNames[partido.equipo_visitante_id]}`} 
                      className="escudo" 
                    />
                    <span className="nombre-equipo">{teamNames[partido.equipo_visitante_id]}</span>
                    <span className="resultado">{partido.resultado.split('-')[1]}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-partidos">No hay partidos para este día.</div>
        )}
      </div>
    </div>
  </div>
  );
};

export default Calendario;