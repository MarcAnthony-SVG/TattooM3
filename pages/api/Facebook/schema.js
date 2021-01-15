import { makeExecutableSchema } from "apollo-server-micro";
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})