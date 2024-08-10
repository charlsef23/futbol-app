import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);
  const [newStat, setNewStat] = useState({
    player: '',
    matches_played: 0,
    goals: 0,
    assists: 0,
    yellow_cards: 0,
    red_cards: 0
  });

  useEffect(() => {
    axios.get('http://localhost/backend/statistics.php')
      .then(res => setStatistics(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/backend/statistics.php', newStat)
      .then(res => setStatistics([...statistics, res.data]))
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStat(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Estadísticas</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Jugador:
          <input type="text" name="player" value={newStat.player} onChange={handleChange} required />
        </label>
        <label>
          Partidos Jugados:
          <input type="number" name="matches_played" value={newStat.matches_played} onChange={handleChange} />
        </label>
        <label>
          Goles:
          <input type="number" name="goals" value={newStat.goals} onChange={handleChange} />
        </label>
        <label>
          Asistencias:
          <input type="number" name="assists" value={newStat.assists} onChange={handleChange} />
        </label>
        <label>
          Tarjetas Amarillas:
          <input type="number" name="yellow_cards" value={newStat.yellow_cards} onChange={handleChange} />
        </label>
        <label>
          Tarjetas Rojas:
          <input type="number" name="red_cards" value={newStat.red_cards} onChange={handleChange} />
        </label>
        <button type="submit">Añadir Estadística</button>
      </form>
      <ul>
        {statistics.map(stat => (
          <li key={stat.id}>
            {stat.player} - Partidos Jugados: {stat.matches_played}, Goles: {stat.goals}, Asistencias: {stat.assists}, Tarjetas Amarillas: {stat.yellow_cards}, Tarjetas Rojas: {stat.red_cards}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;