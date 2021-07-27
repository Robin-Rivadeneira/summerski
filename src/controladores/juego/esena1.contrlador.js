const ensena1 = {}
const pool = require('../../database')

ensena1.mostarEsena1 = (req, res) => {
    res.render('juego/esenario1')
}


module.exports = ensena1