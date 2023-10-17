const pool = require('../../../config/connection')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../../../jwtPassword')
const getProfile = require('../getProfile')

const createPokemon = async (req, res) => {
    const { nome, apelido, habilidades, imagem } = req.body
    const token = req.headers.authorization.split(' ')[1]
    const userId = jwt.verify(token, senhaJwt).id
    try {
        if (!nome || !habilidades) {
            return res.status(400).json({ message: 'Nome e habilidades são obrigatórios' });
        }
        await pool.query(`
            INSERT INTO pokemons (usuario_id, nome, habilidades, imagem, apelido)
            VALUES ($1, $2, $3, $4, $5)
        `, [userId, nome, habilidades, imagem, apelido]);

        return res.status(201).json({ message: 'Pokemon cadastrado com sucesso' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Não foi possível cadastrar o Pokemon', error: error.message });
    }
};



module.exports = { createPokemon }