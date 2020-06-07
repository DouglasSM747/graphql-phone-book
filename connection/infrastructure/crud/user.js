const runQuery = require('../database/queries')

class User {
  list() {
    const sql = 'SELECT * FROM user; SELECT * FROM contact'
    return runQuery(sql).then(resp => {
      const users = resp[0]
      const contacts = resp[1]

      return users.map(user => {
        const contactsUser = contacts.filter(contact => contact.iduser === user.iduser)
        return ({
          ...user,
          contacts: contactsUser
        })
      })
    })
  }

  check(item) {
    const { email, password } = item
    const sql = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}';`
    return runQuery(sql).then(resp => {
      if (resp.length == 1) {
        return true
      }
      return false
    })
  }

  search(id) {
    const sql = `SELECT * FROM user WHERE iduser = ${id}; SELECT * FROM contact WHERE contact.iduser = ${id} `
    return runQuery(sql).then(resp => {
      const user = resp[0][0]
      const contacts = resp[1]

      return ({
        ...user,
        contacts
      })

    })
  }



  add(item) {
    const { email, password } = item
    const sql = `INSERT INTO user(email, password) VALUES('${email}', '${password}')`
    return runQuery(sql).then(resp =>
      ({
        iduser: resp.insertId,
        email,
        password
      })
    )
  }

  delete(userid) {
    const sql = `DELETE FROM user WHERE iduser = ${userid} `
    return runQuery(sql).then(resp => userid)
  }
}

module.exports = new User
