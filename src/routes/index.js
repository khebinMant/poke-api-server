const express = require('express')

let api = express.Router(),

pokemon = require('../controllers/pokemon')

api.get('/pokemon/:id', pokemon.searchPokemonById)
api.get('/pokemon-name/:name', pokemon.searchPokemonByName)
api.get('/pokemons', pokemon.getAllPokemonsPaginated)

module.exports = api;