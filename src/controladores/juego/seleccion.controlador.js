const selecion = {}
const pool = require("../../database")

selecion.mostrar = (req, res) => {
    res.render('juego/seleccion');
}

selecion.lista = async (req, res) => {
    const lista = await pool.query('SELECT * FROM Personajes order by Nombre ASC')
    res.render('juego/seleccion', { lista });
}
selecion.mandar=async(req,res)=>{
    const{personaje}=req.body
    const nuevopersonaje={
        personaje
    }
    await pool.query("DELETE FROM juego")
    await pool.query("INSERT INTO juego set ?",[nuevopersonaje])
    req.flash('success', 'Se mando con exito')
     res.redirect('/juego/comienzo');
}

module.exports=selecion