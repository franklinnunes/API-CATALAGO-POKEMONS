const pool = require('../../config/connection')

const getProfile = async (req, res) => {
    return res.json(req.usuario)
}

module.exports = getProfile