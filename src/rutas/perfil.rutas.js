const express = require('express');
const router = express.Router();

const { traer } = require('../controladores/perfil');
const { isLoggedIn } = require('../lib/auth')

router.get('/list', isLoggedIn, traer);

module.exports = router;