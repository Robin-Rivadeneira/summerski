const personajes = {}
const pool = require('../database')

personajes.mostrar = (req, res) => {
    res.render('personajes/personajesadd');
}

personajes.mandar = async (req, res) => {
    const { Nombre, edad, estatura, Descripcion,imagen } = req.body
    const nuevoIngreso = {
        imagen,
        Nombre,
        edad,
        estatura,
        Descripcion
    };
    await pool.query('INSERT INTO personajes set ?', [nuevoIngreso])
    req.flash('success', 'Se guardoo correctamente')
    res.redirect('/personajes/list');
}

personajes.listar = async (req, res) => {
    const lista = await pool.query('SELECT * FROM personajes')
    res.render('personajes/personajes', { lista });
}

personajes.listar1 = async (req, res) => {
    const lista = await pool.query('SELECT * FROM personajes')
    res.render('Personajes', { lista });
}

personajes.traer = async (req, res) => {
    const { id } = req.params;
    const traer = await pool.query('SELECT * FROM personajes WHERE id = ?', [id])
    res.render('personajes/personajesedit', {Traer: traer[0] });
}

personajes.actualizar = async (req, res) => {
    const { id } = req.params
    const { Nombre, edad, estatura, Descripcion } = req.body
    const actualizarIngreso = {
        Nombre,
        edad,
        estatura,
        Descripcion
    };
    await pool.query('UPDATE personajes set ? WHERE id=?', [actualizarIngreso, id])
    req.flash('success', 'Se actualizo correctamente')
    res.redirect('/personajes/list');
}

module.exports = personajes