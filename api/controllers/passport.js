const { authSecret } = require('../../.env')
const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt
const client = require("../data/database");

module.exports = app => {

	app.use(passport.initialize());

	const params = {
		secretOrKey: authSecret,
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
	}

	const strategy = new Strategy (params, (payload, done) => {
		client.query(`SELECT * FROM utilizador where idutilizador = ($1)`,
			[
				payload.id
			]
		)
		.then(utilizador => done(null, utilizador ? { ...payload } : false))
		.catch(err => done(err, false))
	})

	passport.use(strategy)

	return {
		authenticate: () => passport.authenticate('jwt', { session: false })
	}
}
