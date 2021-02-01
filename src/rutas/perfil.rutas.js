const express = require('express');
const router = express.Router();

const { renderMostrar } = require('../controladores/perfil');

router.get('/list', renderMostrar);

module.exports = router;