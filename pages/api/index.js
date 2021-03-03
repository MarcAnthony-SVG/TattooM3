const { ApolloServer } = require('apollo-server');
const { TwitterAPI } = require('./Twitter/twitterDataSource');
const { typeDefs } = require('./Twitter/typeDefs.gql');
const { resolvers } = require('./Twitter/resolvers');
require('dotenv').config();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  dataSources: () => {
    return {
      twitterAPI: new TwitterAPI(),
    };
  },
  context: () => {
    return {
      Token: process.env.Token,
      Authorization: process.env.BEARER_TOKEN,
    };
  },
});

server
  .listen({
    port: 4001,
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
