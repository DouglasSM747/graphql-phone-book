const Operation = require('../../connection/infrastructure/operations')
const Message = new Operation('message')

const resolvers = {
    Query: {
        userMessagesTContact: (root, params) => Message.search({ iduser: params.iduser, idcontact: params.idcontact }),
        checkMessage: (root, { idmessage }) => User.check(idmessage)

    },
    Mutation: {
        sendMessage: (root, params) => Message.add({ iduser: params.iduser, idcontact: params.idcontact, message: params.message })
    }
}

module.exports = resolvers;