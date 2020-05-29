const Operation = require('../../connection/infrastructure/operations')
const Contact = new Operation('contact')

const resolvers = {
    Query: {
        contacts: () => Contact.list(),
        contact: (root, { idcontact }) => Contact.search(idcontact)
    },
    Mutation: {
        deleteContact: (root, { idcontact }) => Contact.delete(idcontact),
        addContact: (root, params) => Contact.add({ name: params.name, number: params.number, iduser: params.iduser }),
    }
}

module.exports = resolvers;