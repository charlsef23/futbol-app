const fs = require('fs');
const mysql = require('mysql2'); // Usa mysql2 en lugar de mysql

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'your_database'
});

const queryAsync = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

const importData = async (filePath, tableName, columns) => {
  try {
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    for (const record of jsonData) {
      const values = columns.map(column => record[column]);

      const sql = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${columns.map(() => '?').join(', ')})
      ON DUPLICATE KEY UPDATE ${columns.map(col => `${col} = VALUES(${col})`).join(', ')}`;

      await queryAsync(sql, values);
      console.log(`Data imported successfully into ${tableName}`);
    }
  } catch (error) {
    console.error(`Error importing data into ${tableName}:`, error);
  }
};

(async () => {
  try {
    await importData('./data/equipos.json', 'equipos', ['id', 'nombre', 'pais', 'ciudad', 'estadio']);
    await importData('./data/estadisticas_equipos.json', 'estadisticas_equipos', [
      'id', 'equipo_id', 'partidos_jugados', 'partidos_ganados', 'partidos_empatados', 'partidos_perdidos', 'goles_a_favor', 'goles_en_contra'
    ]);
    await importData('./data/partidos.json', 'partidos', ['id', 'equipo_local_id', 'equipo_visitante_id', 'fecha', 'resultado', 'estadio']);
  
    await importData('./data/clasificacion.json', 'clasificacion', [
      'id', 'equipo_id', 'nombre', 'partidos_jugados', 'partidos_ganados', 'partidos_empatados', 'partidos_perdidos', 'goles_a_favor', 'goles_en_contra', 'puntos'
    ]);
  } catch (error) {
    console.error('Error during data import:', error);
  } finally {
    connection.end(() => {
      console.log('All data imported, connection closed.');
    });
  }
})();