import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import tasksRouter from './routes/tasks.js';
const app = express();
import connectDB from './db/connect.js';

const port = 3000;

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send();
});

app.use('/api/v1/tasks', tasksRouter);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {}
};

start();
