module.exports = app => {
	const controller = app.controllers.relacoes;

	app.route('/api/v1/RelacaoPS')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaRelacaoPS)
		.post(controller.criarRelacaoPS)

	app.route('/api/v1/RelacaoPSR/:idrelacaops')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterRelacaoPS)

	app.route('/api/v1/RelacaoPSE/:idevento')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaRelacaoPSEvento)

	app.route('/api/v1/RelacaoPSP/:idpessoasingular')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaRelacaoPSingular)

	app.route('/api/v1/RelacaoPC')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaRelacaoPC)
		.post(controller.criarRelacaoPC)

	app.route('/api/v1/RelacaoPCR/:idrelacaopc')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterRelacaoPC)

	app.route('/api/v1/RelacaoPCE/:idevento')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaRelacaoPCEvento)

	app.route('/api/v1/RelacaoPCP/:idpessoacoletiva')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaRelacaoPColetiva)

	app.route('/api/v1/RelacaoPessoasSC')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaRelacaoPessoasSC)
		.post(controller.criarRelacaoPessoasSC)

	app.route('/api/v1/RelacaoPessoasSCPS/:idpessoasingular')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaRelacaoPessoasSCPSingular)

	app.route('/api/v1/RelacaoPessoasSCPC/:idpessoacoletiva')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterListaRelacaoPessoasSCPColetiva)

	app.route('/api/v1/RelacaoPessoasSCR/:idrelacoespessoassc')
		// .all(app.controllers.passport.authenticate())
		.get(controller.obterRelacaoPessoasSC)
}
