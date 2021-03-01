const comienzo ={}
const pool = require('../../database')

comienzo.Mostrar=(req,res)=>{
res.render('juego/juego');
}


module.exports=comienzo