const pool = require("../../../config/connection")

const getAllPokemons = async (req, res) => {
    try {
        const { rows } = await pool.query('select * from pokemons')
        return res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: 'Server internal error', error: error.message });
    }
}
module.exports = getAllPokemons