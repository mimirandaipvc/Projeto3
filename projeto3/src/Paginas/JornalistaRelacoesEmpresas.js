import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'




function JornalistaRelacoesEmpresas() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const navigate = useNavigate();



	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function logout() {
		localStorage.removeItem("iud");
		localStorage.removeItem("token");
		localStorage.removeItem("idtipoutilizador");
		navigate("/Login");
	}

	const idutilizador = localStorage.getItem("idutilizador");

	function obterEmpresa() {
		return api.get('/api/v1/PessoaColetiva/' + params.idpessoacoletiva)
			.then(function (response) {
				setData2(response.data);
				console.log(response.data);
			});
	}


	function obterDados() {
		return api.get('/api/v1/RelacaoPCP/' + params.idpessoacoletiva)
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}

	function mais(i) {
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

	function menos(i) {
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
		obterDados();
		obterEmpresa();
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
									<Nav.Link href="/JornalistaHome">Home</Nav.Link>
									<Nav.Link href="/JornalistaConsultarPoliticos">Políticos</Nav.Link>
									<Nav.Link href="/JornalistaConsultarEventos">Eventos</Nav.Link>
									<Nav.Link href="/JornalistaConsultarEmpresarios">Empresários</Nav.Link>
									<Nav.Link href="/JornalistaConsultarEmpresas">Empresas</Nav.Link>
									<Nav.Link href="/JornalistaConsultarVotos">Histórico de Votos</Nav.Link>
									<Nav.Link href="/JornalistaAPessoal">Área Pessoal</Nav.Link>
								</Nav>
								<Navbar.Text className="justify-content-end">
									<button id="" type="button" className="btn btn-danger" onClick={logout}>Logout</button>
								</Navbar.Text>
							</Navbar.Collapse>
						</Container>
					</Navbar>


					<br /><br />
					<Row>
						<Col xs={12}><h1>RELAÇÕES</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							{data1.map(item => (
								<Card style={{ width: '23rem' }} key={item.idrelacaopc}>
									<Card.Body>
										<Card.Title>Relação número <b>{item.idrelacaopc}</b> </Card.Title>
										<hr></hr>
										<Card.Text>
											{data2.map(item => (
												<p><u>Empresa</u>: {item.designacao}</p>
											))}
											<p><u>Evento</u>: {item.designacao}</p>
											<p><u>Motivo</u>: {item.motivo}</p>
											<p><u>Valores</u>: {item.valores}€</p>
											<p><u>Data inserção</u>: {item.dataInsercao}</p>
											<p><u>Inserido por</u>: {item.username}</p>
											<p class="credibilidade"><b>Credibilidade: {item.credibilidade}</b></p>
										</Card.Text>
										<hr></hr>
										<Button id="um" variant="success" onClick={() => mais(item.idrelacaopc)}>Credível</Button>
										<Button id="dois" variant="danger" onClick={() => menos(item.idrelacaopc)}>Não Credível</Button>
										<br></br><br></br>
									</Card.Body>
								</Card>
							))}
						</Col>
					</Row>

					<br></br>
					<Row>
						<Col xs={12}><Button variant="dark" href={"http://localhost:3000/JornalistaCriarInfoPC/" + params.idpessoacoletiva}>Criar Relação</Button></Col>
					</Row>

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

export default JornalistaRelacoesEmpresas;
