const { authSecret } = require('../../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const client = require("../data/database");


module.exports = app => {
	const signin = async (req, res) => {
		if (!req.body.username || ! req.body.password) {
			return res.status(400).send('Informe usuário e senha!')
		}

		const user = await client.query(`SELECT username FROM utilizador where username = ($1) and password = ($2)`,
			[
				req.body.username,
				req.body.password
			]
		)
		const tabelas = user.rowCount;
		if (tabelas == 0) {
			return res.status(400).send('Utilizador/Password incorreto!')

		}
		const utilizador = await client.query(`SELECT * FROM utilizador where username = ($1) and password = ($2)`,
			[
				req.body.username,
				req.body.password
			]
		)
		const novo = utilizador.rows;
		// try{
		// 	const isMatch = bcrypt.compareSync(req.body.password, novo[0].password)
		// 	if(!isMatch) return res.status(401).send('Email/Senha inválidos!')
		// }catch (err) {
		// 	return res.status(400).send('x')
		// }

		const now = Math.floor(Date.now() / 1000)

		const payload = {
			id: novo[0].idutilizador,
			username: novo[0].username,
			idtipoutilizador: novo[0].idtipoutilizador,
			iat: now,
			exp: now + (60 * 60 * 24 * 3)
		}

		res.json({
			...payload,
			token: jwt.encode(payload, authSecret)
		})
	}

	const validateToken = async (req, res) => {
		const userData = req.body || null
		try {
			if(userData) {
				const token = jwt.decode(userData.token, authSecret)
				if(new Date(token.exp * 1000) > new Date()) {
					return res.send(true)
				}
			}
		}catch(e){
			//problema com o token
		}
		res.send(false)
	}

	return { signin, validateToken }
}
