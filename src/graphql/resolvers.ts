import { getAllId, getAllTodo } from '../utils';

export const resolvers = {
  Query: {
    Tasks: () => getAllTodo(),
    lastId: async () => {
      const ids = await getAllId();
      return ids[ids.length - 1].id;
    },
  },
  Mutation: {
    CreateTask: (_: any, args: any) => {
      const { text } = args;
    },
  },
};
