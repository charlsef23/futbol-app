import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    axios.get('http://localhost/backend/news.php')
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost/backend/news.php', newArticle)
      .then(res => setNews([...news, res.data]))
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewArticle(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Noticias</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" name="title" value={newArticle.title} onChange={handleChange} required />
        </label>
        <label>
          Contenido:
          <textarea name="content" value={newArticle.content} onChange={handleChange} required />
        </label>
        <button type="submit">Añadir Noticia</button>
      </form>
      <ul>
        {news.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <small>{new Date(article.date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;