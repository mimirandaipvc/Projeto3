const client = require("../data/database");

module.exports = app => {
	const controller = {};
	//client.connect()

	controller.criarVotoRPC = (req, res) => {

		client.query(`INSERT INTO "votorpc" ("idrelacaopc", "idutilizador")
                       values($1, $2)`,
			[
				req.body.idrelacaopc,
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

	controller.criarVotoRPS = (req, res) => {

		client.query(`INSERT INTO "votorps" ("idrelacaops", "idutilizador")
                       values($1, $2)`,
			[
				req.body.idrelacaops,
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

	controller.aumentarCredibilidadeRPC = (req, res) => {

		client.query(`UPDATE relacaopc SET credibilidade = credibilidade + 1 where idrelacaopc = $1;`,
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

	controller.diminuirCredibilidadeRPC = (req, res) => {

		client.query(`UPDATE relacaopc SET credibilidade = credibilidade - 1 where idrelacaopc = $1;`,
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

	return controller;
}
