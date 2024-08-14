import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import logo from '../assets/images/la_liga.png';


const Home = () => {
  const [partidos, setPartidos] = useState([]);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Fetch de los próximos partidos y partidos en directo
    fetch('/api/partidos')
      .then(res => res.json())
      .then(data => setPartidos(data.slice(0, 4))) // Limitar a los próximos 4 partidos
      .catch(err => console.error(err));

    // Fetch de las últimas 3 noticias
    fetch('/api/noticias')
      .then(res => res.json())
      .then(data => setNoticias(data.slice(0, 3))) // Limitar a las últimas 3 noticias
      .catch(err => console.error(err));
  }, []);

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
          <li><Link to="/estadisticas-jugadores">Estadísticas Jugadores</Link></li>
          <li><Link to="/noticias">Noticias</Link></li>
          <li><Link to="/calendario">Calendario</Link></li>
        </ul>
      </nav>

      {/* Sección de Próximos Partidos y En Directo */}
      <section className="partidos-section">
        <h2>Próximos Partidos</h2>
        <div className="partidos-list">
          {partidos.map((partido, index) => (
            <div className="partido-card" key={index}>
              <div className="partido-info">
                <h3>{partido.equipo_local} vs {partido.equipo_visitante}</h3>
                <p>{new Date(partido.fecha).toLocaleString()}</p>
              </div>
              {partido.en_directo && <span className="en-directo">EN DIRECTO</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Últimas Noticias */}
      <section className="noticias-section">
        <h2>Últimas Noticias</h2>
        <div className="noticias-list">
          {noticias.map((noticia, index) => (
            <div className="noticia-card" key={index}>
              <h3>{noticia.titulo}</h3>
              <p>{noticia.descripcion}</p>
              <Link to={`/noticias/${noticia.id}`} className="leer-mas">Leer más</Link>
            </div>
          ))}
        </div>
      </section>
    </div> 
);
};

export default Home;