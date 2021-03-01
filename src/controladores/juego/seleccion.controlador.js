const selecion = {}
const pool = require("../../database")

selecion.mostrar = (req, res) => {
    res.render('juego/seleccion');
}

selecion.lista = async (req, res) => {
    const lista = await pool.query('SELECT * FROM personajes order by Nombre ASC')
    res.render('juego/seleccion', { lista });
}
selecion.mandar=async(req,res)=>{
    const{Nombre}=req.body
    const nuevopersonaje={
        Nombre
    }
    await pool.query("INSERT INTO personajes set ?",[nuevopersonaje])
    req.flash('success', 'Se mando con exito')
     res.redirect('/juego/comienzo');
}

module.exports=selecion