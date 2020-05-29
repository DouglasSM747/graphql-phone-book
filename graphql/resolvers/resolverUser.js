const Operation = require('../../connection/infrastructure/operations')
const User = new Operation('user')

const resolvers = {
    Query: {
        user: (root, { iduser }) => User.search(iduser),
        users: () => User.list(),
    },
    Mutation: {
        deleteUser: (root, { iduser }) => User.delete(iduser),
        addUser: (root, params) => User.add({ email: params.email, password: params.password })
    }
}
module.exports = resolvers;