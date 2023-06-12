import { getRepository } from 'typeorm';
import { Todo } from './entities/todo';

export const createNewTask = async (text: string) => {
  const todo = getRepository(Todo).create({
    text,
    isComplete: false,
  });
  const task = await getRepository(Todo).save(todo);
  return task;
};
