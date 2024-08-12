const fs = require('fs');
const connection = require('./db');

// Función para importar datos desde un archivo JSON a una tabla específica
const importData = (filePath, tableName, columns) => {
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  jsonData.forEach(record => {
    const values = columns.map(column => record[column]);

    connection.query(
      `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${columns.map(() => '?').join(', ')}) 
      ON DUPLICATE KEY UPDATE ${columns.map(col => `${col} = VALUES(${col})`).join(', ')}`,
      values,
      (error) => {
        if (error) {
          console.error(`Error importing data into ${tableName}:`, error);
        } else {
          console.log(`Data imported successfully into ${tableName}`);
        }
      }
    );
  });
};

// Importar datos para cada tabla

// Importar equipos
importData('./data/equipos.json', 'equipos', ['id', 'nombre', 'pais', 'ciudad', 'estadio']);

// Importar jugadores
importData('./data/jugadores.json', 'jugadores', ['id', 'nombre', 'edad', 'dorsal', 'equipo_id']);

// Importar estadísticas de equipos
importData('./data/estadisticas_equipos.json', 'estadisticas_equipos', [
  'id', 'equipo_id', 'partidos_jugados', 'partidos_ganados', 'partidos_empatados', 'partidos_perdidos', 'goles_a_favor', 'goles_en_contra'
]);

// Importar estadísticas de jugadores
importData('./data/estadisticas_jugadores.json', 'estadisticas_jugadores', ['id', 'jugador_id', 'estadistica', 'valor']);

// Importar partidos
importData('./data/partidos.json', 'partidos', ['id', 'equipo_local_id', 'equipo_visitante_id', 'fecha', 'resultado']);

// Importar noticias
importData('./data/noticias.json', 'noticias', ['id', 'titulo', 'descripcion', 'fecha']);

// Importar clasificación
importData('./data/clasificacion.json', 'clasificacion', [
  'id', 'equipo_id', 'partidos_jugados', 'partidos_ganados', 'partidos_empatados', 'partidos_perdidos', 'goles_a_favor', 'goles_en_contra', 'puntos'
]);

// Cerrar la conexión cuando todo esté hecho
connection.end(() => {
  console.log('All data imported, connection closed.');
});