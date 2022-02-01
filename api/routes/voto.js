module.exports = app => {
	const controller = app.controllers.voto;

	app.route('/api/v1/VotoRPC')
		.all(app.controllers.passport.authenticate())
		.post(controller.criarVotoRPC)

	app.route('/api/v1/AumentarCredibilidadeRPC')
		// .all(app.controllers.passport.authenticate())
		.put(controller.aumentarCredibilidadeRPC)

	app.route('/api/v1/DiminuirCredibilidadeRPC')
		// .all(app.controllers.passport.authenticate())
		.put(controller.diminuirCredibilidadeRPC)

	app.route('/api/v1/VotoRPS')
		// .all(app.controllers.passport.authenticate())
		.post(controller.criarVotoRPS)

	app.route('/api/v1/AumentarCredibilidadeRPS')
		// .all(app.controllers.passport.authenticate())
		.put(controller.aumentarCredibilidadeRPS)

	app.route('/api/v1/DiminuirCredibilidadeRPS')
		// .all(app.controllers.passport.authenticate())
		.put(controller.diminuirCredibilidadeRPS)
}
