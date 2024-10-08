const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(cors());

// Servir los escudos desde la carpeta pública fuera de 'backend'
app.use('/escudos', express.static(path.join(__dirname, '../public/escudos')));

// Helper function to read JSON data from a file
const readJsonFile = (filePath) => {
  const fullPath = path.join(__dirname, 'data', filePath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
};

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

// Rutas para Clasificación
app.get('/api/clasificacion', (req, res) => {
  try {
    const clasificacion = readJsonFile('clasificacion.json');
    res.json(clasificacion);
  } catch (error) {
    res.status(500).json({ error: 'Error reading clasificacion data' });
  }
});

app.post('/api/clasificacion', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.get('/api/clasificacion/:id', (req, res) => {
  try {
    const clasificacion = readJsonFile('clasificacion.json');
    const equipo = clasificacion.find(e => e.id === parseInt(req.params.id));
    if (!equipo) {
      return res.status(404).json({ error: 'Equipo not found in clasificacion' });
    }
    res.json(equipo);
  } catch (error) {
    res.status(500).json({ error: 'Error reading clasificacion data' });
  }
});

app.put('/api/clasificacion/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.delete('/api/clasificacion/:id', (req, res) => {
  res.status(405).json({ error: 'Method not allowed' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});