const pool = require("../../../config/connection")

const getPokemonId = async (req, res) => {
    const { id } = req.params
    try {
        const { rows, rowCount } = await pool.query(
            'select * from pokemons where id = $1', [id]
        )
        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'Pokemon not found' })
        }
        return res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: 'Server internal error', error: error.message });
    }
}
module.exports = getPokemonId