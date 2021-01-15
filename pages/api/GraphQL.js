import { ApolloServer, gql } from "apollo-server-micro";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { mergeResolvers, mergeTypeDefs } from "graphql-toolkit";
// import connectDb from "../../lib/mongoose";
require("dotenv").config();

// import { habitsResolvers } from '../../src/api/habits/resolvers';
// import { habitsMutations } from '../../src/api/habits/mutations';
// import Habits from '../../src/api/habits/Habits.graphql';

// const fakeTypeDefs = gql`
//   type Query {
//     sayHello: String
//   }
// `;

// const fakeResolvers = {
//   Query: {
//     sayHello: () => {
//       return 'Hello Level Up!';
//     }
//   }
// };

// const resolvers = mergeResolvers([
//   fakeResolvers,
//   habitsResolvers,
//   habitsMutations
// ]);

// const typeDefs = mergeTypeDefs([fakeTypeDefs, Habits]);
const restLink = new RestLink({
  uri: `//api.instagram.com/oauth/=${process.env.Instagram_API_Token}`,
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
// const server = apolloServer.createHandler({ path: "/api/graphql" });
// export default connectDb(server);
