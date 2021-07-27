const  perfil={}

const pool = require('../database')

perfil.renderMostrar=(req,res)=>{
    res.render('perfillist')
}


perfil.traer= async(req,res)=>{
    const traer = await pool.query("SELECT personaje FROM juego")
    res.render('perfillist',{traer});
}

module.exports=perfil