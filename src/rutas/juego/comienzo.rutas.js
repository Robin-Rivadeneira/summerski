const express = require('express');
const router = express.Router();

const{Mostrar}=require('../../controladores/juego/comienzo.controlador')

router.get('/comienzo',Mostrar)

module.exports=router