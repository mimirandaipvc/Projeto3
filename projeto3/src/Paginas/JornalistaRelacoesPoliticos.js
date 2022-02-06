import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'


import './AdminHome.css'

function JornalistaRelacoesPoliticos() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	const idutilizador = localStorage.getItem("idutilizador");


	function obterDados() {
		console.log('entrei OD')
		return api.get('/api/v1/RelacaoPSP/' + params.idpessoasingular)
			.then(function (response) {
				setData1(response.data);
			});
	}


	function obterPolitico() {
		return api.get('/api/v1/Politico/' + params.idpessoasingular)
			.then(function (response) {
				setData2(response.data);
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

console.log(data1);

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
									<Nav.Link href="/JornalistaAPessoal">Área Pessoal</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<br /><br />
					<h1>RELAÇÕES</h1>

					{data1.map(item => (
						<Card style={{ width: '23rem' }} key={item.idrelacaops}>
							<Card.Body>
								<Card.Title>Relação número <b>{item.idrelacaops}</b> </Card.Title>
								<Card.Text>
									{data2.map(item => (
										<p>Politico:{item.nome}</p>
									))}
									<p>Evento: {item.designacao}</p>
									<p>Motivo: {item.motivo}</p>
									<p>Valores: {item.valores}€</p>
									<p>Data inserção: {item.data}</p>
									<p>Inserido por: {item.username}</p>
									<p><b>Credibilidade: {item.credibilidade}</b></p>
								</Card.Text>
								<Button id="um" variant="success" onClick={() => mais(item.idrelacaops)}>Credível</Button>
								<Button id="dois" variant="danger" onClick={() => menos(item.idrelacaops)}>Não Credível</Button>
								<br></br>
							</Card.Body>
						</Card>
					))}

					<Button variant="dark" href={"http://localhost:3000/JornalistaCriarInfoPS/" + params.idpessoasingular}>Criar Relação</Button>
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

export default JornalistaRelacoesPoliticos;

