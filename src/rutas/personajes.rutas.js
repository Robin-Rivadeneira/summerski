const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')
const { mostrar, mandar, listar, listar1, traer, actualizar } = require('../controladores/personajes')


router.get('/add', isLoggedIn, mostrar)
router.post('/add', isLoggedIn, mandar)
router.get('/list', isLoggedIn, listar)
router.get('/list1', listar1)
router.get('/edit/:id', isLoggedIn, traer)
router.post('/edit/:id', isLoggedIn, actualizar)

module.exports = router