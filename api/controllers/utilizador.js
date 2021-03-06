const client = require("../data/database");
const crypto = require('crypto')


module.exports = app => {
	const controller = {};
	//client.connect()

	controller.obterListaAdmin = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM utilizador where idtipoutilizador = 1`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterAdmin = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM utilizador where idtipoutilizador = 1 and idutilizador = $1`,
			[
				req.params.idutilizador,
			], (err, result) => {
				if (!err) {
					res.send(result.rows);
				}
			})
		//client.end
	}

	controller.AdminEditarAdmin = (req, res) => {
		//client.connect()
		const passwordHash = crypto.createHash('sha512').update(req.body.password).digest('hex')

		client.query(`UPDATE utilizador SET username = $1, password = $2  where idutilizador = $3`,
			[
				req.body.username,
				passwordHash,
				req.params.idutilizador,
			], (err, result) => {
				if (!err) {
					res.send(result.rows);
				}
			})
		//client.end
	}

	controller.AdminEditarJornalista = (req, res) => {
		//client.connect()
		const passwordHash = crypto.createHash('sha512').update(req.body.password).digest('hex')

		client.query(`UPDATE utilizador SET username = $1, password = $2  where idutilizador = $3`,
			[
				req.body.username,
				passwordHash,
				req.params.idutilizador,
			], (err, result) => {
				if (!err) {
					res.send(result.rows);
				}
			})
		//client.end
	}

	controller.AdminEditarCidadaoRegistado = (req, res) => {
		//client.connect()
		const passwordHash = crypto.createHash('sha512').update(req.body.password).digest('hex')
		client.query(`UPDATE utilizador SET username = $1, password = $2  where idutilizador = $3`,
			[
				req.body.username,
				passwordHash,
				req.params.idutilizador,
			], (err, result) => {
				if (!err) {
					res.send(result.rows);
				}
			})
		//client.end
	}

	controller.obterListaJornalista = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM utilizador where idtipoutilizador = 2`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterJornalista = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM utilizador where idtipoutilizador = 2 and idutilizador = $1`,
			[
				req.params.idutilizador,
			], (err, result) => {
				if (!err) {
					res.send(result.rows);
				}
			})
		//client.end
	}

	controller.obterListaCidadaoRegistado = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM utilizador where idtipoutilizador = 3`, (err, result) => {
			if (!err) {
				res.send(result.rows);
			}
		})
		//client.end
	}

	controller.obterCidadaoRegistado = (req, res) => {
		//client.connect()
		client.query(`SELECT * FROM utilizador where idtipoutilizador = 3 and idutilizador = idutilizador = $1`,
			[
				req.params.idutilizador,
			], (err, result) => {
				if (!err) {
					res.send(result.rows);
				}
			})
		//client.end
	}

	controller.AdminCriarAdmin = (req, res) => {
		const user = req.body;
		// let insertQuery = "insert into utilizador(username, password, idtipoutilizador)
		//                values('${user.username}', '${user.password}', ${user.idtipoutilizador})"

		const passwordHash = crypto.createHash('sha512').update(req.body.password).digest('hex')

		client.query(`INSERT INTO "utilizador" ("username", "password", "idtipoutilizador")
                       values($1, $2, $3)`,
			[
				req.body.username,
				passwordHash,
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

	controller.AdminCriarJornalista = (req, res) => {
		const user = req.body;
		// let insertQuery = "insert into utilizador(username, password, idtipoutilizador)
		//                values('${user.username}', '${user.password}', ${user.idtipoutilizador})"

		const passwordHash = crypto.createHash('sha512').update(req.body.password).digest('hex')

		client.query(`INSERT INTO "utilizador" ("username", "password", "idtipoutilizador")
                       values($1, $2, $3)`,
			[
				req.body.username,
				passwordHash,
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

	controller.AdminCriarCidadaoRegistado = (req, res) => {
		const user = req.body;
		// let insertQuery = "insert into utilizador(username, password, idtipoutilizador)
		//                values('${user.username}', '${user.password}', ${user.idtipoutilizador})"

		const passwordHash = crypto.createHash('sha512').update(req.body.password).digest('hex')

		client.query(`INSERT INTO "utilizador" ("username", "password", "idtipoutilizador")
                       values($1, $2, $3)`,
			[
				req.body.username,
				passwordHash,
				'3'
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
