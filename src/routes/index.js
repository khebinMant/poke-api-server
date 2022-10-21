const express = require('express')

let api = express.Router(),

pokemonController = require('../controllers/pokemon')
habitatController = require('../controllers/habitat')
TypeController = require('../controllers/type')

//Pokemons
api.get('/pokemon/:id', pokemonController.searchPokemonById)
api.get('/pokemon-name/:name', pokemonController.searchPokemonByName)
api.get('/pokemons', pokemonController.getAllPokemonsPaginated)

//Habitats
api.get('/habitats', habitatController.getAllHabitats)

//Type
api.get('/types', TypeController.getAllTypes)


module.exports = api;