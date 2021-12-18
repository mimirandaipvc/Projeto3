module.exports = app => {
	const controller = app.controllers.voto;

	app.route('/api/v1/VotoRPC')
		.all(app.controllers.passport.authenticate())
		.post(controller.criarVotoRPC)
		.put(controller.alterarCredibilidadeRPC)

	app.route('/api/v1/VotoRPS')
		.all(app.controllers.passport.authenticate())
		.post(controller.criarVotoRPS)
		.put(controller.alterarCredibilidadeRPS)
}


