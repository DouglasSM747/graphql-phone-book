const Operations = require('../infrastructure/operations')

const User = new Operations('contact')

module.exports = app => {
  app.list('/contacts', (req, ) => {
    User.list()
  })

  app.get('/contacts/contact/:id', (req) => {
    const { id } = req.params
    User.get(id)
  })

  app.add('/contacts/user', (req) => {
    const user = req.body
    User.add(user)
  })

  app.delete('/contacts/contact/:id', (req) => {
    const { id } = req.params
    User.delete(id)
  })
}
