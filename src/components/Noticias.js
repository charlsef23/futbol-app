import React, { useState, useEffect } from 'react';
import '../styles/Noticias.css';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Fetch de todas las noticias
    fetch('/api/noticias')
      .then(res => res.json())
      .then(data => setNoticias(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="noticias">
      <h1>Noticias</h1>
      <div className="noticias-grid">
        {noticias.map((noticia) => (
          <div className="noticia-card" key={noticia.id}>
            <h2>{noticia.titulo}</h2>
            <p>{noticia.descripcion}</p>
            <div className="noticia-footer">
              <span>{new Date(noticia.fecha).toLocaleDateString()}</span>
              <a href={`/noticias/${noticia.id}`} className="leer-mas">Leer más</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;