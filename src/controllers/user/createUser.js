const pool = require('../../config/connection')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    const { nome, email, senha } = req.body
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try {
        const cryptPassword = await bcrypt.hash(senha, 10)

        const newUser = await pool.query(`INSERT INTO usuarios (nome, email, senha)
        VALUES ($1, $2, $3) RETURNING *`, [nome, email, cryptPassword]
        )
        return res.status(201).json(newUser.rows[0])
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message })
    }
}

module.exports = { createUser }