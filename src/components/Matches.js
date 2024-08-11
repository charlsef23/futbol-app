import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [newMatch, setNewMatch] = useState({
    date: '',
    teams: '',
    score: '0-0',
    status: 'upcoming'
  });

  useEffect(() => {
    axios.get('http://localhost/backend/matches.php')
      .then(res => setMatches(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/backend/matches.php', newMatch)
      .then(res => setMatches([...matches, res.data]))
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMatch(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Partidos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Fecha:
          <input type="datetime-local" name="date" value={newMatch.date} onChange={handleChange} required />
        </label>
        <label>
          Equipos:
          <input type="text" name="teams" value={newMatch.teams} onChange={handleChange} required />
        </label>
        <label>
          Resultado:
          <input type="text" name="score" value={newMatch.score} onChange={handleChange} />
        </label>
        <label>
          Estado:
          <select name="status" value={newMatch.status} onChange={handleChange}>
            <option value="upcoming">Próximo</option>
            <option value="live">En Directo</option>
            <option value="finished">Terminado</option>
          </select>
        </label>
        <button type="submit">Añadir Partido</button>
      </form>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            {match.date} - {match.teams} - {match.score} - {match.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;