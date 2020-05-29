const { GraphQLServer } = require('graphql-yoga');
const connection = require('./connection/db')
const resolvers = require('./graphql/resolvers/index')
const typeDefs = require('./graphql/schemas/index')
// connect to database mysql
connection.connect(error => {
    if (error) {
        console.log(error)
    } else {
        console.log('Connected to database!')
    }
})

// initializing the server GraphQL
const server = new GraphQLServer({
    resolvers,
    typeDefs
})

server.start(() => console.log("Start Server in port: 4000"))