import { getRepository } from 'typeorm';
import { setNewTask } from '../bl';
import { Todo } from '../entities/todo';

export const resolvers = {
  Query: {
    tasks: () => getRepository(Todo).find({ order: { id: 'ASC' } }),
  },
  Mutation: {
    createTask: (_: any, args: any) => {
      return setNewTask(args.text);
    },
    deleteTask: (_: any, args: any) => {
      getRepository(Todo).delete(args.id);
      return 'Task Deleted successfully';
    },
    toggleCompleteTask: async (_: any, args: any) => {
      const { id, isComplete } = args;
      getRepository(Todo).update(id, { isComplete });
      return 'Task was toggled successfully!';
    },
  },
};
