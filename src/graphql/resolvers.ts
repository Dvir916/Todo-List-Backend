import { getRepository } from 'typeorm';
import { createNewTask } from '../bl';
import { Todo } from '../entities/todo';

interface CreateTaskArgs {
  text: string;
}

interface DeleteTaskArgs {
  id: string;
}

interface ToggleCompleteTaskInput {
  id: string;
  isComplete: boolean;
}

export const resolvers = {
  Query: {
    tasks: () => getRepository(Todo).find({ order: { id: 'ASC' } }),
  },
  Mutation: {
    createTask: (_: any, args: CreateTaskArgs) => {
      return createNewTask(args.text);
    },
    deleteTask: async (_: any, args: DeleteTaskArgs) => {
      await getRepository(Todo).delete(args.id);
      return 'Task Deleted successfully';
    },
    toggleCompleteTask: async (_: any, args: ToggleCompleteTaskInput) => {
      const { id, isComplete } = args;
      await getRepository(Todo).update(id, { isComplete });
      return 'Task was toggled successfully!';
    },
  },
};
