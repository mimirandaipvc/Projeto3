module.exports = app => {
	const controller = app.controllers.pessoa;

	app.route('/api/v1/Empresario')
		.all(app.controllers.passport.authenticate())
		.get(controller.obterListaEmpresario)
		.post(controller.criarEmpresario)

	app.route('/api/v1/Empresario/:idpessoasingular')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterEmpresario)

	app.route('/api/v1/Politico')

		.get(controller.obterListaPolitico)
		.post(controller.criarPolitico)

	app.route('/api/v1/Politico/:idpessoasingular')
		.get(controller.obterPolitico)

	app.route('/api/v1/PessoaColetiva')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaPessoaColetiva)
		.post(controller.criarPessoaColetiva)

	app.route('/api/v1/PessoaColetiva/:idpessoacoletiva')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterPessoaColetiva)

	app.route('/api/v1/Evento')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaEvento)
		.post(controller.criarEvento)

	app.route('/api/v1/Evento/:idevento')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterEvento)

}
