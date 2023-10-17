const express = require('express')
const { createUser } = require('./controllers/user/createUser')
const { login } = require('./controllers/user/login')
const authentication = require('./middlewares/authentication')
const { createPokemon } = require('./controllers/user/pokemon/createPokemon')
const getProfile = require('./controllers/user/getProfile')
const { updateApelido } = require('./controllers/user/pokemon/updateApelido')
const getAllPokemons = require('./controllers/user/pokemon/getAll')
const getPokemonId = require('./controllers/user/pokemon/getById')
const deletePokemon = require('./controllers/user/pokemon/delete')
const router = express()

router.post('/usuarios', createUser)
router.post('/login', login)

router.use(authentication)

router.get('/perfil', getProfile)

router.post('/pokemon', createPokemon)
router.patch('/pokemon/:id', updateApelido)
router.get('/pokemon', getAllPokemons)
router.get('/pokemon/:id', getPokemonId)
router.delete('/pokemon/:id', deletePokemon)
module.exports = router