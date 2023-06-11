import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Todo {
    id: ID
    text: String
    isComplete: Boolean
  }

  type Query {
    tasks: [Todo]
  }

  type Mutation {
    createTask(text: String): Todo
    deleteTask(id: ID): String
    toggleCompleteTask(id: ID, isComplete: Boolean): String
  }
`;
