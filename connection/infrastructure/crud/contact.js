const runQuery = require('../database/queries')

class Contact {
  list() {
    const sql = 'SELECT user.iduser as parentId, user.email as parentEmail, contact.idcontact, contact.name, contact.number FROM contact INNER JOIN user WHERE user.iduser = contact.iduser'
    return runQuery(sql).then(contacts => contacts.map(contact =>
      ({
        idcontact: contact.idcontact,
        name: contact.name,
        number: contact.number,
        parentContact: {
          iduser: contact.parentId,
          email: contact.parentEmail
        }
      })
    )
    )
  }

  search(id) {
    const sql = `SELECT user.iduser as parentId, user.email as parentEmail, contact.idcontact, contact.name, contact.number FROM contact INNER JOIN user WHERE contact.idcontact=${id} AND user.iduser = contact.iduser`
    return runQuery(sql).then(resp =>
      ({
        idcontact: resp[0].idcontact,
        name: resp[0].name,
        number: resp[0].number,
        parentContact: {
          iduser: resp[0].parentId,
          email: resp[0].parentEmail
        }
      })
    )
  }

  add(item) {
    const { number, name, iduser } = item
    const sql = `INSERT INTO contact(number, name, iduser) VALUES('${number}', '${name}', '${iduser}')`
    return runQuery(sql).then(resp =>
      ({
        idcontact: resp.insertId,
        name,
        number,
        iduser,
      })
    )
  }

  delete(userid) {
    const sql = `DELETE FROM contact WHERE idcontact=${userid}`
    return runQuery(sql).then(resp => userid)
  }
}

module.exports = new Contact
