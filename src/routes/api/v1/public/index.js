const express = require('express')

let api = express.Router(),

pokemonController = require('../../../../controllers/pokemon')
habitatController = require('../../../../controllers/habitat')
TypeController = require('../../../../controllers/type')

//Pokemons
/**
 * @openapi
 * /api/v1/public/pokemons:
 *   get:
 *     tags:
 *       - Todos los Pokémons
 *     summary: Obtiene la información de todos los Pokémons, los obtiene aleatoriamente
 *     description: Esta API se conecta con postgresql mediante el ORM sequelize, no se usa lenguaje query para las consultas.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transaction:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *                     $ref: "#/components/schemas/Pokemon"
 *                 msg:
 *                   type: string
 *                   example: Successfully Query!
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transaction: 
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                 msg:
 *                   type: string
 *                   example: Servidor no disponible
 */
 api.get('/pokemons', pokemonController.getAllPokemons)
/**
 * @openapi
 * /api/v1/public/pokemon/{id}:
 *   get:
 *     tags:
 *       - Pokémon por su Id
 *     summary: Obtiene la información un pokémon dado su id
 *     description: Esta API se conecta con postgresql mediante el ORM sequelize, no se usa lenguaje query para las consultas.
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       description: Id del pokemon a buscar  
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transaction:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object 
 *                   $ref: "#/components/schemas/Pokemon"
 *                 msg:
 *                   type: string
 *                   example: Successfully Query!
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transaction: 
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                 msg:
 *                   type: string
 *                   example: Servidor no disponible
 */
api.get('/pokemon/:id', pokemonController.searchPokemonById)
/**
 * @openapi
 * /api/v1/public/pokemon-name/{name}:
 *   get:
 *     tags:
 *       - Pokémon por su nombre
 *     summary: Obtiene la información de todos los habitats
 *     description: Esta API se conecta con postgresql mediante el ORM sequelize, no se usa lenguaje Query para las consultas. 
 *     parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       description: Nombre del pokemon a buscar  
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transaction:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object 
 *                   $ref: "#/components/schemas/Pokemon"
 *                 msg:
 *                   type: string
 *                   example: Successfully Query!
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transaction: 
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                 msg:
 *                   type: string
 *                   example: Servidor no disponible
 */
api.get('/pokemon-name/:name', pokemonController.searchPokemonByName)

//Habitats
/**
 * @openapi
 * /api/v1/public/habitats:
 *   get:
 *     tags:
 *       - Todos los Habitats
 *     summary: Obtiene la información de todos los habitats de los pokemons
 *     description: Esta API se conecta con postgresql mediante el ORM sequelize, no se usa lenguaje Query para las consultas. 
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transaction:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *                     $ref: "#/components/schemas/Habitat"
 *                 msg:
 *                   type: string
 *                   example: Successfully Query!
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transaction: 
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                 msg:
 *                   type: string
 *                   example: Servidor no disponible
 */
api.get('/habitats', habitatController.getAllHabitats)

//Types
/**
 * @openapi
 * /api/v1/public/types:
 *   get:
 *     tags:
 *       - Todos los Tipos
 *     summary: Obtiene la información de todos los tipos de pokemons
 *     description: Esta API se conecta con postgresql mediante el ORM sequelize, no se usa lenguaje Query para las consultas. 
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transaction:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *                     $ref: "#/components/schemas/Type"
 *                 msg:
 *                   type: string
 *                   example: Successfully Query!
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 transaction: 
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                 msg:
 *                   type: string
 *                   example: Servidor no disponible
 */
api.get('/types', TypeController.getAllTypes)


module.exports = api;