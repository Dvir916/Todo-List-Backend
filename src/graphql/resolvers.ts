import { getAllId, getTodoId } from '../utils';

export const resolvers = {
  Query: {
    root: () => 'Hello World!',
    Tasks: () => getTodoId(),
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
