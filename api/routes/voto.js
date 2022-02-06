module.exports = app => {
	const controller = app.controllers.voto;

	app.route('/api/v1/VotoRPC')
		.all(app.controllers.passport.authenticate())
		.post(controller.criarVotoRPC)

	app.route('/api/v1/VerificaVotoRPC/:idutilizador/:idrelacaopc')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterVotoRPC)

	app.route('/api/v1/AumentarCredibilidadeRPC')
		.all(app.controllers.passport.authenticate())
		.put(controller.aumentarCredibilidadeRPC)

	app.route('/api/v1/DiminuirCredibilidadeRPC')
		.all(app.controllers.passport.authenticate())
		.put(controller.diminuirCredibilidadeRPC)

	app.route('/api/v1/VotoRPS')
		.all(app.controllers.passport.authenticate())
		.post(controller.criarVotoRPS)

	app.route('/api/v1/VotoRPS/:idutilizador')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterListaVotosRPS)

	app.route('/api/v1/VotoRPC/:idutilizador')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterListaVotosRPC)

	app.route('/api/v1/VerificaVotoRPS/:idutilizador/:idrelacaops')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterVotoRPS)

	app.route('/api/v1/AumentarCredibilidadeRPS')
		.all(app.controllers.passport.authenticate())
		.put(controller.aumentarCredibilidadeRPS)

	app.route('/api/v1/DiminuirCredibilidadeRPS')
		.all(app.controllers.passport.authenticate())
		.put(controller.diminuirCredibilidadeRPS)
}
