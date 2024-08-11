import React, { useState } from 'react';
import '../styles/AddNoticia.css';

const AddNoticia = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaNoticia = {
      titulo,
      descripcion,
      fecha: new Date().toISOString(),
    };

    fetch('/api/noticias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevaNoticia),
    })
      .then(res => res.json())
      .then(data => {
        // Limpiar el formulario
        setTitulo('');
        setDescripcion('');
        alert('Noticia añadida exitosamente');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="add-noticia">
      <h1>Añadir Noticia</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Añadir Noticia</button>
      </form>
    </div>
  );
};

export default AddNoticia;