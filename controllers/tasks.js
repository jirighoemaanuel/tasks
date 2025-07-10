import Task from '../models/Tasks.js';

const getAllTasks = (req, res) => {
  res.send('get all tasks');
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json(req.params);
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
