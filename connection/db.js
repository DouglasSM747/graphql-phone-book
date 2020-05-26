const mysql = require('mysql')

const database = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'phone-book',
    multipleStatements: true
})

module.exports = database