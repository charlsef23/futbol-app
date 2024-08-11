const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

// Helper function to read JSON data from a file
const readJsonFile = (filePath) => {
  const fullPath = path.join(__dirname, 'data', filePath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
};

// Rutas para Equipos
app.get('/api/equipos', (req, res) => {
  try {
    const equipos = readJsonFile('equipos.json');
    res.json(equipos);
  } catch (error) {
    res.status(500).json({ error: 'Error reading equipos data' });
  }
});

app.post('/api/equipos', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.get('/api/equipos/:id', (req, res) => {
  try {
    const equipos = readJsonFile('equipos.json');
    const equipo = equipos.find(e => e.id === parseInt(req.params.id));
    if (!equipo) {
      return res.status(404).json({ error: 'Equipo not found' });
    }
    res.json(equipo);
  } catch (error) {
    res.status(500).json({ error: 'Error reading equipos data' });
  }
});

app.put('/api/equipos/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.delete('/api/equipos/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

// Rutas para Jugadores
app.get('/api/jugadores', (req, res) => {
  try {
    const jugadores = readJsonFile('jugadores.json');
    res.json(jugadores);
  } catch (error) {
    res.status(500).json({ error: 'Error reading jugadores data' });
  }
});

app.post('/api/jugadores', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.get('/api/jugadores/:id', (req, res) => {
  try {
    const jugadores = readJsonFile('jugadores.json');
    const jugador = jugadores.find(j => j.id === parseInt(req.params.id));
    if (!jugador) {
      return res.status(404).json({ error: 'Jugador not found' });
    }
    res.json(jugador);
  } catch (error) {
    res.status(500).json({ error: 'Error reading jugadores data' });
  }
});

app.put('/api/jugadores/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.delete('/api/jugadores/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

// Rutas para Estadísticas de Jugadores
app.get('/api/estadisticas-jugadores', (req, res) => {
  try {
    const estadisticasJugadores = readJsonFile('estadisticas_jugadores.json');
    res.json(estadisticasJugadores);
  } catch (error) {
    res.status(500).json({ error: 'Error reading estadisticas_jugadores data' });
  }
});

app.post('/api/estadisticas-jugadores', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.get('/api/estadisticas-jugadores/:id', (req, res) => {
  try {
    const estadisticasJugadores = readJsonFile('estadisticas_jugadores.json');
    const estadistica = estadisticasJugadores.find(e => e.id === parseInt(req.params.id));
    if (!estadistica) {
      return res.status(404).json({ error: 'Estadistica not found' });
    }
    res.json(estadistica);
  } catch (error) {
    res.status(500).json({ error: 'Error reading estadisticas_jugadores data' });
  }
});

app.put('/api/estadisticas-jugadores/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.delete('/api/estadisticas-jugadores/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

// Rutas para Partidos
app.get('/api/partidos', (req, res) => {
  try {
    const partidos = readJsonFile('partidos.json');
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ error: 'Error reading partidos data' });
  }
});

app.post('/api/partidos', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.get('/api/partidos/:id', (req, res) => {
  try {
    const partidos = readJsonFile('partidos.json');
    const partido = partidos.find(p => p.id === parseInt(req.params.id));
    if (!partido) {
      return res.status(404).json({ error: 'Partido not found' });
    }
    res.json(partido);
  } catch (error) {
    res.status(500).json({ error: 'Error reading partidos data' });
  }
});

app.put('/api/partidos/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.delete('/api/partidos/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

// Rutas para Noticias
app.get('/api/noticias', (req, res) => {
  try {
    const noticias = readJsonFile('noticias.json');
    res.json(noticias);
  } catch (error) {
    res.status(500).json({ error: 'Error reading noticias data' });
  }
});

app.post('/api/noticias', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.get('/api/noticias/:id', (req, res) => {
  try {
    const noticias = readJsonFile('noticias.json');
    const noticia = noticias.find(n => n.id === parseInt(req.params.id));
    if (!noticia) {
      return res.status(404).json({ error: 'Noticia not found' });
    }
    res.json(noticia);
  } catch (error) {
    res.status(500).json({ error: 'Error reading noticias data' });
  }
});

app.put('/api/noticias/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.delete('/api/noticias/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});