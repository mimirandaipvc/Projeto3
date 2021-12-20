const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');
const pg = require('pg')
const client = require('../api/data/database.js')
const cors = require('cors');

module.exports = () => {
	const app = express();

	// //CONECTAR À BASE DE DADOS
	// const db = new pg.Client({
	// 	host: '127.0.0.1',
	// 	port: 5432,
	// 	user: 'postgres',
	// 	password: 'mimiranda',
	// 	database: 'Rede Contactos Politicos',
	// })

	//client.connect()


	// SETANDO VARIÁVEIS DA APLICAÇÃO
	app.set('port', process.env.PORT || config.get('server.port'));

	// MIDDLEWARES
	app.use(bodyParser.json());
	app.use(cors({
		origin: '*'
	}));

	consign({ cwd: 'api' })
		// .include('./controllers/passport.js')
		.then('data')
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};
