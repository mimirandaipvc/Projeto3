module.exports = app => {
	const controller = app.controllers.utilizador;

	app.post('/api/v1/signin', app.controllers.auth.signin)
	app.post('/api/v1/validateToken', app.controllers.auth.validateToken)

	app.route('/api/v1/Admin')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterListaAdmin)
		.post(controller.criarAdmin)

	app.route('/api/v1/Admin/:idutilizador')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterAdmin)

	app.route('/api/v1/Jornalista')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterListaJornalista)
		.post(controller.criarJornalista)

	app.route('/api/v1/Jornalista/:idutilizador')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterJornalista)

	app.route('/api/v1/CidadaoRegistado')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterListaCidadaoRegistado)
		.post(controller.criarCidadaoRegistado)

	app.route('/api/v1/CidadaoRegistado/:idutilizador')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterCidadaoRegistado)
}
