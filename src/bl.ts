import { getRepository } from 'typeorm';
import { Todo } from './entities/todo';

export const getLastId = async () => {
  const tasks = await getRepository(Todo).find({ select: ['id'], order: { id: 'DESC' } });
  return tasks[0].id;
};

export const setNewTask = async (text: string) => {
  const todo = getRepository(Todo).create({
    text,
    isComplete: false,
  });
  const task = await getRepository(Todo).save(todo);
  return task;
};
