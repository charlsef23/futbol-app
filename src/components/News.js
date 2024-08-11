// src/components/News.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// src/components/News.js
import './News.css';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('/api/news')
      .then(response => setNews(response.data))
      .catch(error => console.error('Error cargando noticias:', error));
  }, []);

  return (
    <div>
      <h1>Noticias</h1>
      <ul>
        {news.map(item => (
          <li key={item.id}>{item.titulo}: {item.contenido}</li>
        ))}
      </ul>
    </div>
  );
}

export default News;