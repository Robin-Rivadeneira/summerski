const esenario2 = {}
const pool = require('../../database')

esenario2.Esna2=(req,res)=>{
    res.render('juego/esenario2');
}
esenario2.traer = async (req, res) => {
    const lista = await pool.query("SELECT * FROM juego")
    res.render('juego/esenario2', { lista });
}
module.exports=esenario2