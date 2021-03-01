const descripcion = {}

const pool = require('../database');

descripcion.renderVista = (req, res) => {
    res.render('descripcion/descripcionadd')
}

descripcion.agregar = async (req, res) => {
    const { Descripcion, Titulo } = req.body;
    const descripcion = {
        Titulo,
        Descripcion
    };
    await pool.query('INSERT INTO historia set ?', [descripcion]);
    req.flash('success', 'Se guardo correctamente')
    res.redirect('/descripcion/list')
}

descripcion.lista = async (req, res) => {
    const lista = await pool.query('SELECT * FROM historia');
    res.render('descripcion/descripcion', { lista })
}

descripcion.lista1 = async (req, res) => {
    const lista = await pool.query('SELECT * FROM historia');
    res.render('descripcion1', { lista })
}

descripcion.renderEditar = async (req, res) => {
    const { id } = req.params;
    const lista = await pool.query('SELECT * FROM historia WHERE id = ?', [id]);
    res.render('descripcion/descripcionedit', {editar: lista[0]});
}

descripcion.editar = async (req, res) => {
    const { id } = req.params;
    const {Descripcion} = req.body;
    const nuevaDescripcion={
        Descripcion
    };
    await pool.query('UPDATE historia set ? WHERE id = ?', [nuevaDescripcion, id]);
    req.flash('success', 'Se guardo correctamente');
    res.redirect('/descripcion/list');
}
module.exports = descripcion