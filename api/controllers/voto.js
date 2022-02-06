const client = require("../data/database");

module.exports = app => {
	const controller = {};
	//client.connect()

	controller.criarVotoRPC = (req, res) => {

		client.query(`INSERT INTO "votorpc" ("idrelacaopc", "idutilizador", "tipoVoto")
                       values($1, $2, $3)`,
			[
				req.body.idrelacaopc,
				req.body.idutilizador,
				req.body.tipovoto
			],
			(err, result) => {
				if (!err) {
					res.send('Insertion was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.criarVotoRPS = (req, res) => {

		client.query(`INSERT INTO "votorps" ("idrelacaops", "idutilizador", "tipoVoto")
                       values($1, $2, $3)`,
			[
				req.body.idrelacaops,
				req.body.idutilizador,
				req.body.tipovoto
			],
			(err, result) => {
				if (!err) {
					res.send('Insertion was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.aumentarCredibilidadeRPC = (req, res) => {

		client.query(`UPDATE relacaopc SET credibilidade = credibilidade + 1 where idrelacaopc = $1;`,
			[
				req.body.idrelacaopc,
			],
			(err, result) => {
				if (!err) {
					res.send('Update was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.diminuirCredibilidadeRPC = (req, res) => {

		client.query(`UPDATE relacaopc SET credibilidade = credibilidade - 1 where idrelacaopc = $1;`,
			[
				req.body.idrelacaopc,
			],
			(err, result) => {
				if (!err) {
					res.send('Update was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.aumentarCredibilidadeRPS = (req, res) => {

		client.query(`UPDATE relacaops SET credibilidade = credibilidade + 1 where idrelacaops = $1;`,
			[
				req.body.idrelacaops,
			],
			(err, result) => {
				if (!err) {
					res.send('Update was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.diminuirCredibilidadeRPS = (req, res) => {

		client.query(`UPDATE relacaops SET credibilidade = credibilidade - 1 where idrelacaops = $1;`,
			[
				req.body.idrelacaops,
			],
			(err, result) => {
				if (!err) {
					res.send('Update was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.obterVotoRPC = (req, res) => {

		client.query(`SELECT * FROM votorpc WHERE idutilizador = $1 and idrelacaopc = $2`,
			[
				req.params.idutilizador,
				req.params.idrelacaopc
			],
			(err, result) => {
				if (!err) {
					res.send(result.rows)
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.obterVotoRPS = (req, res) => {

		client.query(`SELECT * FROM votorps WHERE idutilizador = $1 and idrelacaops = $2`,
			[
				req.params.idutilizador,
				req.params.idrelacaops
			],
			(err, result) => {
				if (!err) {
					res.send(result.rows)
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.obterListaVotosRPS = (req, res) => {
		client.query(`SELECT * FROM votorps WHERE idutilizador = $1`,
			[
				req.params.idutilizador
			],
			(err, result) => {
				if (!err) {
					res.send(result.rows)
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.obterListaVotosRPC = (req, res) => {
		client.query(`SELECT * FROM votorpc WHERE idutilizador = $1`,
			[
				req.params.idutilizador
			],
			(err, result) => {
				if (!err) {
					res.send(result.rows)
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	return controller;
}
