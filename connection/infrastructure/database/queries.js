const connection = require('../../db')

const runQuery = (query) => {
  return new Promise((resolve, reject) => connection.query(query, (error, results) => {
    console.log("query executed!")
    if (error) {
      reject(error)
    } else {
      resolve(results)
    }
  }
  )
  )
}

module.exports = runQuery
