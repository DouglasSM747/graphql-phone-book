const Operation = require('../../connection/infrastructure/operations')
const User = new Operation('user')

const resolvers = {
    Query: {
        user: (root, { iduser }) => User.search(iduser),
        checkUser: (root, params) => User.check({ email: params.email, password: params.password }),
        users: () => User.list(),
    },
    Mutation: {
        deleteUser: (root, { iduser }) => User.delete(iduser),
        addUser: (root, params) => User.add({ email: params.email, password: params.password })
    }
}
module.exports = resolvers;