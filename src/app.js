import express from 'express';
import knex from 'knex';
import cookieParser from 'cookie-parser';
import config from '../knexfile.js';

const db = knex(config);
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/pets', async (req, res, next) => {
  try {
    const data = await db('pet_type').select();
    res.send(data);
  } catch (e) {
    res.status(500);
    next(e);
  }
});

app.post('/', (req, res) => {
  const { test } = req.body;
  if (test) {
    console.log(test);
    res.sendStatus(200);
  }
  res.sendStatus(400);
});

export default app;
