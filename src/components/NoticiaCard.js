// src/components/NoticiaCard.js

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/NoticiaCard.css'; // Asegúrate de tener este archivo CSS

const NoticiaCard = ({ noticia }) => {
  return (
    <div className="noticia-card">
      <h2 className="noticia-title">{noticia.titulo}</h2>
      <p className="noticia-description">{noticia.descripcion}</p>
      <div className="noticia-footer">
        <span className="noticia-date">{new Date(noticia.fecha).toLocaleDateString()}</span>
        <a href={`/noticias/${noticia.id}`} className="noticia-link">Leer más</a>
      </div>
    </div>
  );
};

NoticiaCard.propTypes = {
  noticia: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired
  }).isRequired
};

export default NoticiaCard;