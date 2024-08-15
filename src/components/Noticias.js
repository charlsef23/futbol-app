// src/components/Noticias.js

import React from 'react';
import NoticiaCard from './NoticiaCard';
import '../styles/Noticias.css'; // Asegúrate de tener este archivo CSS
import { Link } from 'react-router-dom';
import logo from '../assets/images/la_liga.png';

const noticiasData = [
  {
    id: 1,
    titulo: "Lamine Yamal visita a su padre y comprueba su mejoría tras la agresión",
    descripcion: "No acudió antes por recomendación del centro hospitalario",
    fecha: "2024-08-15"
  },
  {
    id: 2,
    titulo: "Noticia 2",
    descripcion: "Descripción de la noticia 2",
    fecha: "2024-08-11"
  }
];

const Noticias = () => {
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
          <li><Link to="/noticias">Noticias</Link></li>
          <li><Link to="/calendario">Calendario</Link></li>
        </ul>
      </nav>
    <div className='noticias'>
    <div className="noticias-container">
      <h1 className="noticias-title">Noticias</h1>
      <div className="noticias-grid">
        {noticiasData.length > 0 ? (
          noticiasData.map((noticia) => (
            <NoticiaCard key={noticia.id} noticia={noticia} />
          ))
        ) : (
          <p className="no-news">No hay noticias disponibles.</p>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Noticias;