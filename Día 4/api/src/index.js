import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'rootpass',
  database: process.env.DB_NAME || 'ejemplo',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

app.get('/visitas', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT contador FROM visitas WHERE id = 1');
    res.json({ contador: rows[0]?.contador ?? 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al leer el contador' });
  }
});

app.post('/visitas/incrementar', async (req, res) => {
  try {
    await pool.query(`
      UPDATE visitas
      SET contador = contador + 1
      WHERE id = 1
    `);
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al incrementar el contador' });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API escuchando en puerto ${port}`);
});
