const { GraphQLServer } = require('graphql-yoga');
const connection = require('./connection/db')
const Operation = require('./connection/infrastructure/operations')
const User = new Operation('user')
const Contact = new Operation('contact')
// created to inform what will be done in typeDefs
const resolvers = {
    Query: {
        user: (root, { iduser }) => User.search(iduser),
        users: () => User.list(),
        contacts: () => Contact.list(),
        status: () => "Server running!",
        contact: (root, { idcontact }) => Contact.search(idcontact)
    },
    Mutation: {
        deleteContact: (root, { idcontact }) => Contact.delete(idcontact),
        addContact: (root, params) => Contact.add({ name: params.name, number: params.number, iduser: params.iduser }),
        deleteUser: (root, { iduser }) => User.delete(iduser),
        addUser: (root, params) => User.add({ email: params.email, password: params.password })
    }
}

// connect to database mysql
connection.connect(error => {
    if (error) {
        console.log(error)
    } else {
        console.log('Connected to database!')
    }
})

// initializing the server
const server = new GraphQLServer({
    resolvers,
    typeDefs: './schema.graphql'
})

server.start(() => console.log("Start Server in port: 4000"))