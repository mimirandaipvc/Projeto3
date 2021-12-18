const { Client } = require('pg')

	//CONECTAR À BASE DE DADOS
	const client = new Client({
		host: '127.0.0.1',
		port: 5432,
		user: 'postgres',
		password: 'mimiranda',
		database: 'Rede Contactos Politicos',
	})

	client.connect()

	module.exports = client

