const { Pool } = require('pg')
const { host, port, database, user, password } = require('../../dataConfig')

const pool = new Pool({
    host, port, database, user, password
})

module.exports = pool