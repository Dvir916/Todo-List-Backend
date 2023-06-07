import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Todo } from '../entities/todo';

const tasksRouter = Router();

tasksRouter.get('/', async (req, res) => {
  try {
    const todos = await getRepository(Todo).find({ order: { id: 'ASC' } });
    res.json(todos);
  } catch (error) {
    console.error('Error executing database query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

tasksRouter.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    const todo = getRepository(Todo).create({
      text,
      isComplete: false,
    });
    const savedTask = await getRepository(Todo).save(todo);
    res.json(savedTask.id);
  } catch (error) {
    console.error('Error executing database query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

tasksRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await getRepository(Todo).delete(id);
    res.json({ message: `Todo with id ${id} was deleted successfully!` });
  } catch (error) {
    console.error('Error executing database query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

tasksRouter.patch('/statuses', async (req, res) => {
  try {
    const { complete, id } = req.body;
    await getRepository(Todo).update(id, { isComplete: complete });
    res.json(`Todo with id ${id} updated successfully!`);
  } catch (error) {
    console.error('Error executing database query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export { tasksRouter };
