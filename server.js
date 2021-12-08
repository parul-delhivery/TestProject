const { ApolloServer} = require('apollo-server-express');
const {typeDefs} = require('./Schema/TypeDefs');
const {resolvers} = require('./Schema/Resolvers');

const express = require('express')
const app = express()


// const server = new ApolloServer({ typeDefs, resolvers });
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({port:4000}, () => {
    console.log("🚀  Server ready ");
  });



