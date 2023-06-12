import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Task {
    id: String!
    text: String!
    isComplete: Boolean!
  }

  type Query {
    tasks: [Task!]!
  }

  type Mutation {
    createTask(text: String!): Task!
    deleteTask(id: ID!): String!
    toggleCompleteTask(id: String!, isComplete: Boolean!): String!
  }
`;
