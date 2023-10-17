const pool = require('../../config/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtPassword = require('../../jwtPassword')

const login = async (req, res) => {
    const { email, senha } = req.body
    try {
        const user = await pool.query(`SELECT * FROM usuarios WHERE email = $1`, [email])
        if (user.rowCount < 1) {
            return res.status(404).json({ message: 'Email or password invalid' })
        }
        const validPassword = await bcrypt.compare(senha, user.rows[0].senha)
        if (!validPassword) {
            return res.status(400).json({ message: 'Email or password invalid' })
        }
        const token = jwt.sign({ id: user.rows[0].id }, jwtPassword, { expiresIn: '8h' })
        const { senha: _, ...loggedUser } = user.rows[0]
        return res.json({ loggedUser, token })
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message })
    }
}

module.exports = { login }