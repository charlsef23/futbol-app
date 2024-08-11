// src/components/Noticias.js
import React from 'react';
import './Noticias.css';

const Noticias = () => {
  return (
    <div className="noticias">
      <h1>Últimas Noticias</h1>
      <div className="noticia">
        <h2>Noticia 1</h2>
        <p>Detalles de la primera noticia...</p>
      </div>
      <div className="noticia">
        <h2>Noticia 2</h2>
        <p>Detalles de la segunda noticia...</p>
      </div>
      {/* Añade más noticias según sea necesario */}
    </div>
  );
};

export default Noticias;