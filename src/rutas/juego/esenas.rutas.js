const express = require('express');
const router = express.Router();

const { mostarEsena1 } = require('../../controladores/juego/esena1.contrlador');
const { traer } = require('../../controladores/juego/esenario2.controlador');

router.get('/esena1', mostarEsena1)
router.get('/esenario2',traer)
module.exports= router 