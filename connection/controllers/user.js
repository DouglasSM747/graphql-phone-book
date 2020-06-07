const Operations = require('../infrastructure/operations')

const User = new Operations('user')

module.exports = app => {
  app.list('/users', (req) => {
    User.list()
  })

  app.get('/users/user/:id', (req) => {
    const { id } = req.params
    User.get(id)
  })

  app.add('/users/user', (req) => {
    const user = req.body
    User.add(user)
  })

  app.check('/users/user', (req) => {
    const user = req.body
    User.add(user)
  })

  app.delete('/users/user/:id', (req) => {
    const { id } = req.params
    User.delete(id)
  })
}