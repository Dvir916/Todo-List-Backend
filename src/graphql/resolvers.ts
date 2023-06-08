import { getRepository } from 'typeorm';
import { getLastId, setNewTask } from '../bl';
import { Todo } from '../entities/todo';

export const resolvers = {
  Query: {
    Tasks: () => getRepository(Todo).find({ order: { id: 'ASC' } }),
    lastId: async () => getLastId(),
  },
  Mutation: {
    CreateTask: (_: any, args: any) => {
      return setNewTask(args.text);
    },
    DeleteTask: (_: any, args: any) => {
      getRepository(Todo).delete(args.id);
      return 'Task Deleted successfully';
    },
    ToggleCompleteTask: async (_: any, args: any) => {
      const { id, isComplete } = args;
      getRepository(Todo).update(id, { isComplete });
      return 'Task was toggled successfully!';
    },
  },
};
