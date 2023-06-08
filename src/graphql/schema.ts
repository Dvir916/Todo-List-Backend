import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Todo {
    id: ID
    text: String
    isComplete: Boolean
  }

  type Query {
    Tasks: [Todo]
    lastId: Int
  }

  type Mutation {
    CreateTask(text: String): Todo
    DeleteTask(id: ID): String
    ToggleCompleteTask(id: ID, isComplete: Boolean): Todo
  }
`;
