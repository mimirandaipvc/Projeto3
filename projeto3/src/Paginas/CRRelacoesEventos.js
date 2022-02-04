import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'


import './AdminHome.css'

function CRRelacoesEventos() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);
	const [data4, setData4] = useState([]);
	const [data5, setData5] = useState([]);
	const [data6, setData6] = useState([]);


	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	const idutilizador = localStorage.getItem("idutilizador");

	function obterJornalista() {
		for (const i = 0; i < data1.length; i++) {
			return api.get('/api/v1/Jornalista/' + data1[i].idutilizador)
				.then(function (response) {
					setData6(response.data);
					console.log(response.data);
				});
		}
	}

	function obterPolitico() {
		for (const i = 0; i < data5.length; i++) {
			return api.get('/api/v1/Politico/' + data5[i].idpessoasingular)
				.then(function (response) {
					setData3(response.data);
					console.log(response.data);
				});
		}
	}

	function obterEmpresa() {
		for (const i = 0; i < data1.length; i++) {
			return api.get('/api/v1/PessoaColetiva/' + data1[i].idpessoacoletiva)
				.then(function (response) {
					setData4(response.data);
					console.log(response.data);
				});
		}
	}

	function obterEvento() {
		for (const i = 0; i < data1.length; i++) {
			return api.get('/api/v1/Evento/' + params.idevento)
				.then(function (response) {
					setData2(response.data);
					console.log(response.data);
				});
		}
	}

	function obterDadosPCE() {
		return api.get('/api/v1/RelacaoPCE/' + params.idevento)
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}

	function obterDadosPSE() {
		return api.get('/api/v1/RelacaoPSE/' + params.idevento)
			.then(function (response) {
				setData5(response.data);
				console.log(response.data);
			});
	}

	function maisS(i) {
		return api.get('/api/v1/VerificaVotoRPS/' + idutilizador + '/' + i)
			.then(function (response) {
				console.log(response.data)
				if (response.data.length != 0) {
					alert('Já votou!')
				} else {
					api.post('/api/v1/VotoRPS', {
						idrelacaops: i,
						idutilizador,
						tipovoto: 'Credivel'
					});
					api.put('/api/v1/AumentarCredibilidadeRPS', {
						idrelacaops: i,
					});
				}
			});
	}

	function menosS(i) {
		return api.get('/api/v1/VerificaVotoRPS/' + idutilizador + '/' + i)
			.then(function (response) {
				console.log(response.data)
				if (response.data.length != 0) {
					alert('Já votou!')
				} else {
					api.post('/api/v1/VotoRPS', {
						idrelacaops: i,
						idutilizador,
						tipovoto: 'Não Credivel'
					});
					api.put('/api/v1/DiminuirCredibilidadeRPS', {
						idrelacaops: i,
					});
				}
			});
	}

	function maisC(i) {
		return api.get('/api/v1/VerificaVotoRPC/' + idutilizador + '/' + i)
			.then(function (response) {
				console.log(response.data)
				if (response.data.length != 0) {
					alert('Já votou!')
				} else {
					api.post('/api/v1/VotoRPC', {
						idrelacaopc: i,
						idutilizador,
						tipovoto: 'Credivel'
					});
					api.put('/api/v1/AumentarCredibilidadeRPC', {
						idrelacaopc: i,
					});
				}
			});
	}

	function menosC(i) {
		return api.get('/api/v1/VerificaVotoRPC/' + idutilizador + '/' + i)
			.then(function (response) {
				console.log(response.data)
				if (response.data.length != 0) {
					alert('Já votou!')
				} else {
					api.post('/api/v1/VotoRPC', {
						idrelacaopc: i,
						idutilizador,
						tipovoto: 'Não Credivel'
					});
					api.put('/api/v1/DiminuirCredibilidadeRPC', {
						idrelacaopc: i,
					});
				}
			});
	}

	useEffect(() => {
		obterDadosPCE();
		obterDadosPSE();
		obterPolitico();
		obterEmpresa();
		obterEvento();
		obterJornalista();
	}, [data1]);


	return (
		<div id="page-container">

			<Container fluid>

				<div id="content-wrap">

					<Navbar bg="dark" variant="dark" expand="lg">
						<Container>
							<Navbar.Brand href="#home">Rede Contactos Politicos</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="me-auto">
									<Nav.Link href="/CRHome">Home</Nav.Link>
									<Nav.Link href="/CRConsultarPoliticos">Políticos</Nav.Link>
									<Nav.Link href="/CRConsultarEventos">Eventos</Nav.Link>
									<Nav.Link href="/CRConsultarEmpresarios">Empresários</Nav.Link>
									<Nav.Link href="/CRConsultarEmpresas">Empresas</Nav.Link>
									<Nav.Link href="/CRAPessoal">Área Pessoal</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<br /><br />
					<div>
						<h1>RELAÇÕES COLETIVAS</h1>

						{data1.map(item => (
							<Card style={{ width: '23rem' }} key={item.idrelacaops}>
								<Card.Body>
									<Card.Title>Relação número <b>{item.idrelacaopc}</b> </Card.Title>
									<Card.Text>
										{data4.map(item => (
											<p>Empresa:{item.designacao}</p>
										))}
										{data2.map(item => (
											<p>Evento: {item.designacao}</p>
										))}
										<p>Motivo: {item.motivo}</p>
										<p>Valores: {item.valores}€</p>
										<p>Data inserção: {item.data}</p>
										{data6.map(item => (
											<p>Inserido por: {item.username}</p>
										))}
										<p><b>Credibilidade: {item.credibilidade}</b></p>
									</Card.Text>
									<Button id="um" variant="success" onClick={() => maisC(item.idrelacaopc)}>Credível</Button>
									<Button id="dois" variant="danger" onClick={() => menosC(item.idrelacaopc)}>Não Credível</Button>
									<br></br>
									<small>O meu Voto: {item.tipoVoto}</small>
								</Card.Body>
							</Card>
						))}
					</div>

					<br></br>

					<div>
						<h1>RELAÇÕES SINGULARES</h1>

						{data5.map(item => (
							<Card style={{ width: '23rem' }} key={item.idrelacaops}>
								<Card.Body>
									<Card.Title>Relação número <b>{item.idrelacaops}</b> </Card.Title>
									<Card.Text>
										{data3.map(item => (
											<p>Político:{item.nome}</p>
										))}
										{data2.map(item => (
											<p>Evento: {item.designacao}</p>
										))}
										<p>Motivo: {item.motivo}</p>
										<p>Valores: {item.valores}€</p>
										<p>Data inserção: {item.data}</p>
										{data6.map(item => (
											<p>Inserido por: {item.username}</p>
										))}
										<p><b>Credibilidade: {item.credibilidade}</b></p>
									</Card.Text>
									<Button variant="success" onClick={() => maisS(item.idrelacaops)}>Credível</Button>
									<Button id="dois" variant="danger" onClick={() => menosS(item.idrelacaops)}>Não Credível</Button>
									<br></br>
									<small>O meu Voto: {item.tipoVoto}</small>
								</Card.Body>
							</Card>
						))}
					</div>
				</div>

				<footer id="footer">
					<div class="container text-center">
						<small>© 2022 Copyright: Miguel Miranda e Pedro Castro | Engenharia Informática | ESTG-IPVC </small>
					</div>
				</footer>

			</Container >
		</div >
	);

}

export default CRRelacoesEventos;

