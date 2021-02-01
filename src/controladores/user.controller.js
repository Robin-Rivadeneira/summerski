const userCtrl = {};

userCtrl.renderUserProfile = (req, res, next) => {
  res.render('/perfil/perfillist');
}

module.exports = userCtrl;