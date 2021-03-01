const express = require('express');
const router = express.Router();

const { renderMostrar } = require('../controladores/perfil');
const { isLoggedIn } = require('../lib/auth')
router.get('/list',isLoggedIn, renderMostrar);

module.exports = router;