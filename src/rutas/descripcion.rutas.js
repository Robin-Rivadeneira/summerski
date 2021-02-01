const express = require('express');
const router = express.Router();

const {renderVista, agregar, lista, renderEditar, editar, lista1 } = require('../controladores/descripcion');

router.get('/list', lista);
router.get('/list1', lista1);
router.get('/add', renderVista);
router.post('/add', agregar);
router.get('/edit/:id', renderEditar);
router.post('/edit/:id', editar);



module.exports = router;