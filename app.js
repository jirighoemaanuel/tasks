import express from 'express';
import tasksRouter from './routes/tasks.js';
const app = express();

const port = 3000;

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send();
});

app.use('/api/v1/tasks', tasksRouter);

// app.get('/api/v1/tasks')      - get all the tasks
// app.post('/api/v1/tasks')      - create a new tasks
// app.get('/api/v1/tasks/:id')   - get single tasks
// app.get('/api/v1/tasks/:id')      - update task
// app.delete('/api/v1/tasks/:id')      - delete task

app.listen(port, console.log(`Server is listening on port ${port}...`));
