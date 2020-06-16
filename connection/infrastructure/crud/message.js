const runQuery = require('../database/queries')

class Message {

  search(item) {
    const { iduser, idcontact } = item
    const sql = `SELECT * from message WHERE user = ${iduser} AND contact = ${idcontact}`
    return runQuery(sql).then(resp =>
      (
        resp
      )
    )
  }

  add(item) {
    const { iduser, idcontact, message } = item
    console.log(item)
    const sql = `INSERT INTO message(user, contact, message) VALUES('${iduser}', '${idcontact}', '${message}')`
    return runQuery(sql).then(resp =>
      (
        {
          idmessage: resp.insertId,
          iduser: iduser,
          idcontact: idcontact,
          message: message
        }
      )
    )
  }
}

module.exports = new Message
