import { ApolloServer, gql } from 'apollo-server';


const typeDefs = gql `
  type Query {
    hello: String
  }
`;


const resolvers = {
    Query: {
        hello: () => 'Hello, ths is my graphql!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});