const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth')
const { renderVista, agregar, lista, renderEditar, editar, lista1 } = require('../controladores/descripcion');

router.get('/list', isLoggedIn, lista);
router.get('/list1', lista1);
router.get('/add', isLoggedIn, renderVista);
router.post('/add', isLoggedIn, agregar);
router.get('/edit/:id', isLoggedIn, renderEditar);
router.post('/edit/:id', isLoggedIn, editar);



module.exports = router;