const express = require('express');
const router = express.Router();

const { renderIndex } = require('../controladores/index.conroller');

router.get('/', renderIndex);

module.exports = router;