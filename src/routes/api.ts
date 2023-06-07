import express from 'express';
import { tasksRouter } from './tasks-router';

const ApiRouter = express.Router();

ApiRouter.get('/', (req, res, next) => {
  res.send('Hello world!!!');
});

ApiRouter.use('/tasks', tasksRouter);

export { ApiRouter };
