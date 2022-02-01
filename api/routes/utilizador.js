module.exports = app => {
	const controller = app.controllers.utilizador;

	app.post('/api/v1/signin', app.controllers.auth.signin)
	app.post('/api/v1/validateToken', app.controllers.auth.validateToken)

	app.route('/api/v1/Admin')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterListaAdmin)
		.post(controller.AdminCriarAdmin)

	app.route('/api/v1/Admin/:idutilizador')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterAdmin)
		.put(controller.AdminEditarAdmin)

	app.route('/api/v1/Jornalista')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaJornalista)
		.post(controller.AdminCriarJornalista)

	app.route('/api/v1/Jornalista/:idutilizador')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterJornalista)
		.put(controller.AdminEditarJornalista)

	app.route('/api/v1/CidadaoRegistado')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaCidadaoRegistado)
		.post(controller.AdminCriarCidadaoRegistado)

	app.route('/api/v1/CidadaoRegistado/:idutilizador')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterCidadaoRegistado)
		.put(controller.AdminEditarCidadaoRegistado)
}
