import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'




function CRelacoesEventos() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data5, setData5] = useState([]);
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

	function obterEvento() {
		for (const i = 0; i < data1.length; i++) {
			return api.get('/api/v1/Evento/' + params.idevento)
				.then(function (response) {
					setData2(response.data);
					console.log(response.data);
				});
		}
	}


	useEffect(() => {
		obterDadosPCE();
		obterDadosPSE();
		obterEvento();
	}, []);


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
									<Nav.Link href="/CHome">Home</Nav.Link>
									<Nav.Link href="/CConsultarPoliticos">Políticos</Nav.Link>
									<Nav.Link href="/CConsultarEventos">Eventos</Nav.Link>
									<Nav.Link href="/CConsultarEmpresarios">Empresários</Nav.Link>
									<Nav.Link href="/CConsultarEmpresas">Empresas</Nav.Link>
								</Nav>
								<Navbar.Text className="justify-content-end">
									<button id="" type="button" className="btn btn-danger" onClick={logout}>Logout</button>
								</Navbar.Text>
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<br /><br />
					<Row>
						<Col xs={12}><h1>RELAÇÕES COLETIVAS</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							{data1.map(item => (
								<Card style={{ width: '23rem' }} key={item.idrelacaops}>
									<Card.Body>
										<Card.Title>Relação número <b>{item.idrelacaopc}</b> </Card.Title>
										<hr></hr>
										<Card.Text>
											<p><u>Empresa</u>:{item.designacao}</p>
											{data2.map(item => (
												<p><u>Evento</u>: {item.designacao}</p>
											))}
											<p><u>Motivo</u>: {item.motivo}</p>
											<p><u>Valores</u>: {item.valores}€</p>
											<p><u>Data inserção</u>: {item.dataInsercao}</p>
											<p><u>Inserido por</u>: {item.username}</p>
											<p class="credibilidade"><b>Credibilidade: {item.credibilidade}</b></p>
										</Card.Text>
									</Card.Body>
								</Card>
							))}
						</Col>
					</Row>

					<br></br>

					<Row>
						<Col xs={12}><h1>RELAÇÕES SINGULARES</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							{data5.map(item => (
								<Card style={{ width: '23rem' }} key={item.idrelacaops}>
									<Card.Body>
										<Card.Title>Relação número <b>{item.idrelacaops}</b> </Card.Title>
										<hr></hr>
										<Card.Text>
											<p><u>Político/Empresário</u>:{item.nome}</p>
											{data2.map(item => (
												<p><u>Evento</u>: {item.designacao}</p>
											))}
											<p><u>Motivo</u>: {item.motivo}</p>
											<p><u>Valores</u>: {item.valores}€</p>
											<p><u>Data inserção</u>: {item.dataInsercao}</p>
											<p><u>Inserido por</u>: {item.username}</p>
											<p class="credibilidade"><b>Credibilidade: {item.credibilidade}</b></p>
										</Card.Text>
									</Card.Body>
								</Card>
							))}
						</Col>
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

export default CRelacoesEventos;

