require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/perfil', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM perfil');

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: 'Erro no servidor' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});