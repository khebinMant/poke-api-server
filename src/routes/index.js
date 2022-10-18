const express = require('express')

let api = express.Router(),

pokemon = require('../controllers/pokemon')

api.get('/pokemon/:name', pokemon.searchPokemonByIdOrName)
// api.get('/pokemon/:id', pokemon.searchPokemonById)
api.get('/pokemons', pokemon.getAllPokemonsPaginated)

module.exports = api;