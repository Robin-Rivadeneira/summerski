const descripcion = {}

const pool = require('../database');

descripcion.renderVista = (req, res) => {
    res.render('descripcion/descripcionadd')
}

descripcion.agregar = async (req, res) => {
    const { Descripcion } = req.body;
    const descripcion = {
        Descripcion
    };
    await pool.query('INSERT INTO juego set ?', [descripcion]);
    req.flash('success', 'Se guardo correctamente')
    res.redirect('/descripcion/list')
}

descripcion.lista = async (req, res) => {
    const lista = await pool.query('SELECT * FROM juego');
    res.render('descripcion/descripcion', { lista })
}

descripcion.lista1 = async (req, res) => {
    const lista = await pool.query('SELECT * FROM juego');
    res.render('descripcion1', { lista })
}

descripcion.renderEditar = async (req, res) => {
    const { id } = req.params;
    const lista = await pool.query('SELECT * FROM juego WHERE id = ?', [id]);
    res.render('descripcion/descripcionedit', {editar: lista[0]});
}

descripcion.editar = async (req, res) => {
    const { id } = req.params;
    const {Descripcion} = req.body;
    const nuevaDescripcion={
        Descripcion
    };
    await pool.query('UPDATE juego set ? WHERE id = ?', [nuevaDescripcion, id]);
    req.flash('success', 'Se guardo correctamente');
    res.redirect('/descripcion/list');
}
module.exports = descripcion