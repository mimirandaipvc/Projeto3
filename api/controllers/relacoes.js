const client = require("../data/database");

module.exports = app => {
	const controller = {};
	//client.connect()

	controller.obterListaRelacaoPS = (req, res) => {
		//client.connect()
		client.query(`SELECT idpessoasingular, idevento, data FROM relacaops`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterRelacaoPS = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM relacaops where idrelacaops = $1`,
			[
				req.params.idrelacaops,
			],
			(err, result) => {
				if (!err) {
					res.send(result.rows);
				}
			})
		//client.end
	}

	controller.obterListaRelacaoPSEvento = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM relacaops where idevento = $1`,
			[
				req.params.idevento,
			], (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterListaRelacaoPSingular = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM relacaops where idpessoasingular = $1`,
			[
				req.params.idpessoasingular,
			], (err, result) => {
				if (!err) {
					res.send(result.rows);
				}
			})
		//client.end
	}

	controller.obterListaRelacaoPC = (req, res) => {
		//client.connect()
		client.query(`SELECT idpessoacoletiva, idevento, data FROM relacaops`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterListaRelacaoPCEvento = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM relacaopc where idevento = $1`,
			[
				req.params.idevento,
			], (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterListaRelacaoPColetiva = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM relacaopc where idpessoacoletiva = $1`,
			[
				req.params.idpessoacoletiva,
			], (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterRelacaoPC = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM relacaopc where idrelacaopc = $1`,
			[
				req.params.idrelacaopc,
			], (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterListaRelacaoPessoasSC = (req, res) => {
		//client.connect()
		client.query(`SELECT idpessoasingular, idpessoacoletiva, cargo FROM relacoespessoassc`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterListaRelacaoPessoasSCPSingular = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM relacoespessoassc where idpessoasingular = $1`,
			[
				req.params.idpessoasingular,
			], (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterListaRelacaoPessoasSCPColetiva = (req, res) => {
		//client.connect()
		client.query(`SELECT idpessoasingular, idpessoacoletiva, cargo FROM relacoespessoassc where idpessoacoletiva = $1`,
			[
				req.params.idpessoacoletiva,
			], (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterRelacaoPessoasSC = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM relacoespessoassc where idrelacoespessoassc = $1`,
			[
				req.params.idrelacoespessoassc,
			], (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.criarRelacaoPS = (req, res) => {
		client.query(`INSERT INTO "relacaops" ("motivo", "valores", "idpessoasingular", "idevento", "idutilizador")
                       values($1, $2, $3, $4, $5)`,
			[
				req.body.motivo,
				req.body.valores,
				req.body.idpessoasingular,
				req.body.idevento,
				req.body.idutilizador
			],
			(err, result) => {
				if (!err) {
					res.send('Insertion was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.criarRelacaoPC = (req, res) => {
		client.query(`INSERT INTO "relacaopc" ("motivo", "valores", "data", "idpessoacoletiva", "idevento", "idutilizador")
                       values($1, $2, $3, $4, $5, $6)`,
			[
				req.body.motivo,
				req.body.valores,
				req.body.data,
				req.body.idpessoacoletiva,
				req.body.idevento,
				req.body.idutilizador
			],
			(err, result) => {
				if (!err) {
					res.send('Insertion was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.criarRelacaoPessoasSC = (req, res) => {
		client.query(`INSERT INTO "relacoespessoassc" ("datainicio", "cargo", "salario", "idpessoasingular", "idpessoacoletiva", "idutilizador")
                       values($1, $2, $3, $4, $5, $6)`,
			[
				req.body.datainicio,
				req.body.cargo,
				req.body.salario,
				req.body.idpessoasingular,
				req.body.idpessoacoletiva,
				req.body.idutilizador,
			],
			(err, result) => {
				if (!err) {
					res.send('Insertion was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	return controller;
}
