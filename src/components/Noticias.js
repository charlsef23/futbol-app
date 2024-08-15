import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/la_liga.png';
import '../styles/Noticias.css';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch de todas las noticias
    fetch('/api/noticias')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setNoticias(data);
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch(err => {
        console.error('Error fetching noticias:', err);
        setError('No se pudo cargar las noticias.');
      });
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
          <li><Link to="/noticias">Noticias</Link></li>
          <li><Link to="/calendario">Calendario</Link></li>
        </ul>
      </nav>
      <div className='noticias'>
      {/* Contenido de noticias */}
      <div className="noticias-content">
        <h1>Noticias</h1>
        {error && <p className="error-message">{error}</p>}
        {noticias.length ? (
          <div className="noticias-grid">
            {noticias.map((noticia) => (
              <div className="noticia-card" key={noticia.id}>
                <h2>{noticia.titulo}</h2>
                <p>{noticia.descripcion}</p>
                <div className="noticia-footer">
                  <span>{new Date(noticia.fecha).toLocaleDateString()}</span>
                  <Link to={`/noticias/${noticia.id}`} className="leer-mas">Leer más</Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay noticias disponibles.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Noticias;