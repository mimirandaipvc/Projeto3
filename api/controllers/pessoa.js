const client = require("../data/database.js");

module.exports = app => {
	const controller = {};
	//client.connect()

	controller.obterListaPolitico = (req, res) => {
		//client.connect()
		client.query(`SELECT nome FROM pessoasingular where idtipopessoasingular = 1`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end()
	}

	controller.obterPolitico = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM pessoasingular where idtipopessoasingular = 1 and idpessoasingular = idpessoasingular`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end()
	}

	controller.obterListaEmpresario = (req, res) => {
		//client.connect()
		client.query(`SELECT nome FROM pessoasingular where idtipopessoasingular = 2`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterEmpresario = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM pessoasingular where idtipopessoasingular = 2 and idpessoasingular = idpessoasingular`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.criarPolitico = (req, res) => {

		client.query(`INSERT INTO "pessoasingular" ("nome", "sexo", "nacionalidade", "datanascimento", "profissao", "idtipopessoasingular")
                       values($1, $2, $3, $4, $5, $6)`,
			[
				req.body.nome,
				req.body.sexo,
				req.body.nacionalidade,
				req.body.datanascimento,
				req.body.profissao,
				'1'
			],
			(err, result) => {
				if (!err) {
					res.send('Insertion was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.criarEmpresario = (req, res) => {

		client.query(`INSERT INTO "pessoasingular" ("nome", "sexo", "nacionalidade", "datanascimento", "profissao", "idtipopessoasingular")
                       values($1, $2, $3, $4, $5, $6)`,
			[
				req.body.nome,
				req.body.sexo,
				req.body.nacionalidade,
				req.body.datanascimento,
				req.body.profissao,
				'2'
			],
			(err, result) => {
				if (!err) {
					res.send('Insertion was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.obterListaPessoaColetiva = (req, res) => {
		//client.connect()
		client.query(`SELECT designacao FROM pessoacoletiva`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterPessoaColetiva = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM pessoacoletiva where idpessoacoletiva = idpessoacoletiva`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.criarPessoaColetiva = (req, res) => {

		client.query(`INSERT INTO "pessoacoletiva" ("designacao", "pais", "anofundacao", "ramoatividade")
                       values($1, $2, $3, $4)`,
			[
				req.body.designacao,
				req.body.pais,
				req.body.anofundacao,
				req.body.ramoatividade
			],
			(err, result) => {
				if (!err) {
					res.send('Insertion was successful')
				}
				else { console.log(err.message) }
			})
		//client.end;
	}

	controller.obterListaEvento = (req, res) => {
		//client.connect()
		client.query(`SELECT designacao FROM evento`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterEvento = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM evento where idevento = idevento`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.criarEvento = (req, res) => {

		client.query(`INSERT INTO "evento" ("designacao", "descricao", "data")
                       values($1, $2, $3)`,
			[
				req.body.designacao,
				req.body.descricao,
				req.body.data
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
