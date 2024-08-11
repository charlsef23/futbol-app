import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MatchesCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/backend/matches.php')
      .then(res => setMatches(res.data))
      .catch(err => console.error(err));
  }, []);

  const events = matches.filter(match => new Date(match.date).toDateString() === date.toDateString());

  return (
    <div className="calendar-container">
      <h1>Calendario de Partidos</h1>
      <Calendar
        onChange={setDate}
        value={date}
      />
      <div className="events">
        <h2>Partidos del {date.toDateString()}:</h2>
        <ul>
          {events.map((match) => (
            <li key={match.id}>
              {match.teams} - {match.score} ({match.status})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchesCalendar;