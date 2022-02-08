import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'




function CRRelacoesPoliticos() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);


	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	const idutilizador = localStorage.getItem("idutilizador");



	function obterPolitico() {
		return api.get('/api/v1/Politico/' + params.idpessoasingular)
			.then(function (response) {
				setData2(response.data);
				console.log(response.data);
			});
	}

	function obterDados() {
		return api.get('/api/v1/RelacaoPSP/' + params.idpessoasingular)
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}

	function mais(i) {
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

	function menos(i) {
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

	useEffect(() => {
		obterDados();
		obterPolitico();
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
									<Nav.Link href="/CRConsultarVotos">Histórico de Votos</Nav.Link>
									<Nav.Link href="/CRAPessoal">Área Pessoal</Nav.Link>
								</Nav>
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
								<Card style={{ width: '23rem' }} key={item.idrelacaops}>
									<Card.Body>
										<Card.Title>Relação número <b>{item.idrelacaops}</b> </Card.Title>
										<hr></hr>
										<Card.Text>
											{data2.map(item => (
												<p><u>Politico</u>:{item.nome}</p>
											))}
											<p><u>Evento</u>: {item.designacao}</p>
											<p><u>Motivo</u>: {item.motivo}</p>
											<p><u>Valores</u>: {item.valores}€</p>
											<p><u>Data inserção</u>: {item.data}</p>
											<p><u>Inserido por</u>: {item.username}</p>
											<p class="credibilidade"><b>Credibilidade: {item.credibilidade}</b></p>
										</Card.Text>
										<hr></hr>
										<Button id="um" variant="success" onClick={() => mais(item.idrelacaops)}>Credível</Button>
										<Button id="dois" variant="danger" onClick={() => menos(item.idrelacaops)}>Não Credível</Button>
										<br></br><br></br>
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

export default CRRelacoesPoliticos;

