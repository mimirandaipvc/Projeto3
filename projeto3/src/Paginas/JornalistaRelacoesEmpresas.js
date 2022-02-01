import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'


import './AdminHome.css'

function JornalistaRelacoesEmpresas() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function obterEmpresa() {
		return api.get('/api/v1/PessoaColetiva/' + params.idpessoacoletiva)
			.then(function (response) {
				setData2(response.data);
				console.log(response.data);
			});
	}

	function obterEvento() {
		for (const i = 0; i < data1.length; i++) {
			return api.get('/api/v1/Evento/' + data1[i].idevento)
				.then(function (response) {
					setData3(response.data);
					console.log(response.data);
				});
		}
	}

	function obterDados() {
		return api.get('/api/v1/RelacaoPCP/' + params.idpessoacoletiva)
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}

	function mais(i) {
		api.post('/api/v1/VotoRPC', {
			idrelacaopc: i,
			idutilizador: 1,
		});
		api.put('/api/v1/AumentarCredibilidadeRPC', {
			idrelacaopc: i,
		});
		console.log('mais');
		// window.location.reload();

	}

	function menos(i) {
		api.post('/api/v1/VotoRPC', {
			idrelacaopc: i,
			idutilizador: 1,
		});
		api.put('/api/v1/DiminuirCredibilidadeRPC', {
			idrelacaopc: i,
		});
		console.log('menos');
		// window.location.reload();

	}

	useEffect(() => {
		obterDados();
		obterEmpresa();
		obterEvento();
	}, [data1]);

	return (
		<div>
			<Container fluid>

				<Navbar bg="light" expand="lg">
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
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<br />
				<h1>RELAÇÕES</h1>

				{data1.map(item => (
					<Card style={{ width: '23rem' }} key={item.idrelacaopc}>
						<Card.Body>
							<Card.Title>Relação número <b>{item.idrelacaopc}</b> </Card.Title>
							<Card.Text>
								{data2.map(item => (
									<p>Empresa:{item.designacao}</p>
								))}
								{data3.map(item => (
									<p>Evento: {item.designacao}</p>
								))}
								<p>Motivo: {item.motivo}</p>
								<p>Valores: {item.valores}€</p>
								<p>Data inserção: {item.data}</p>
								<p>Inserido por: {item.idutilizador}</p>
								<p><b>Credibilidade: {item.credibilidade}</b></p>
							</Card.Text>
							<Button variant="success" onClick={() => mais(item.idrelacaopc)}>Credível</Button>
							<Button id="dois" variant="danger" onClick={() => menos(item.idrelacaopc)}>Não Credível</Button>
						</Card.Body>
					</Card>
				))}
				<br></br>
				<Button variant="dark" href={"http://localhost:3000/JornalistaCriarInfoPC/" + params.idpessoacoletiva}>Criar Relação</Button>

			</Container>
		</div>
	);

}

export default JornalistaRelacoesEmpresas;
