const { ApolloServer } = require("apollo-server");

const { typeDefs } = require("./graphql/type-defs");
const { resolvers } = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`The server is running at: ${url} :)`)
});
