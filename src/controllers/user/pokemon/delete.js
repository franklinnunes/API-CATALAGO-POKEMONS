const pool = require("../../../config/connection")

const deletePokemon = async (req, res) => {
    const { id } = req.params
    try {
        const { rowCount } = await pool.query(
            'select * from pokemons where id = $1', [id]
        )
        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'Pokemon not found' })
        }
        await pool.query('delete from pokemons where id = $1', [id])
        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ message: 'Server internal error', error: error.message });
    }
}
module.exports = deletePokemon