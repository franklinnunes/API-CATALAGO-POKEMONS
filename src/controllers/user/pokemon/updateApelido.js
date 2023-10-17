const pool = require('../../../config/connection')

const updateApelido = async (req, res) => {
    const { id } = req.params
    const { apelido } = req.body

    try {
        const { rowCount, rows } = await pool.query(
            `select * from pokemons where id = $1`, [id]
        )
        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'Pokemon not found' })
        }

        await pool.query(
            `update pokemons set apelido = $1 where id = $2`, [apelido, id]
        )
        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ message: 'Server internal error', error: error.message });
    }
}

module.exports = { updateApelido }