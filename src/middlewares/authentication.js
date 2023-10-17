const pool = require('../config/connection')
const jwt = require('jsonwebtoken')
const jwtPassword = require('../jwtPassword')

const authentication = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ message: 'Not authorized' })
    }
    const token = authorization.split(' ')[1]
    try {
        const { id } = jwt.verify(token, jwtPassword)
        const { rows, rowCount } = await pool.query(`SELECT * FROM usuarios WHERE id = $1`, [id])
        if (rowCount < 1) {
            return res.status(401).json({ message: 'Not authorized' })
        }
        const { senha, ...usuario } = rows[0]
        req.usuario = usuario
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Not authorized' })
    }
}

module.exports = authentication