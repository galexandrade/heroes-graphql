const { ApolloServer, gql } = require('apollo-server');
const RestAPI = require('./dataSource');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return { restAPI: new RestAPI() };
    },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
