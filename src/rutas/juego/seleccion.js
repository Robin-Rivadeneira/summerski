const express = require('express');
const router = express.Router();

const{mandar,lista}= require('../../controladores/juego/seleccion.controlador')

router.get('/seleccion',lista)
router.post('/seleccion',mandar)

module.exports=router