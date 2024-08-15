// src/components/NoticiaDetalle.js

import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/NoticiaDetalle.css'; // Asegúrate de tener este archivo CSS

const noticiasData = [
  {
    id: 1,
    titulo: "Noticia 1",
    descripcion: "Descripción de la noticia 1",
    fecha: "2024-08-10"
  },
  {
    id: 2,
    titulo: "Noticia 2",
    descripcion: "Descripción de la noticia 2",
    fecha: "2024-08-11"
  }
];

const NoticiaDetalle = () => {
  const { id } = useParams();
  const noticia = noticiasData.find(noticia => noticia.id === parseInt(id));

  if (!noticia) {
    return <p>No se encontró la noticia.</p>;
  }

  return (
    <div className="noticia-detalle">
      <h1 className="noticia-titulo">{noticia.titulo}</h1>
      <p className="noticia-fecha">{new Date(noticia.fecha).toLocaleDateString()}</p>
      <p className="noticia-descripcion">{noticia.descripcion}</p>
    </div>
  );
};

export default NoticiaDetalle;