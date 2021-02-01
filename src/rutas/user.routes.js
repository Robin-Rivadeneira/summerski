const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');
const { renderUserProfile } = require('../controladores/user.controller');

router.get('/list', isLoggedIn, renderUserProfile);

module.exports = router;