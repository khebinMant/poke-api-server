const express = require('express')

let api = express.Router(),

pokemon = require('../controllers/pokemon')

api.get('/saludar', pokemon.saludar)
// router.post('/transferenciaCommit', rutas.realizarTransferenciaCommit)
// router.post('/transferenciaRollBack', rutas.realizarTransferenciaRollBack)
// router.get('/transferencia',rutas.getLastTransferencia)
// router.get('/cuenta/:numero_cuenta',rutas.getCuentaSaldo)

module.exports = api;