import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'


import './AdminHome.css'

function AdminRelacoesEmpresarios() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);
	const [data4, setData4] = useState([]);

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function obterJornalista() {
		for (const i = 0; i < data1.length; i++) {
			return api.get('/api/v1/Jornalista/' + data1[i].idutilizador)
				.then(function (response) {
					setData4(response.data);
					console.log(response.data);
				});
		}
	}

	function obterEmpresario() {
		return api.get('/api/v1/Empresario/' + params.idpessoasingular)
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
		return api.get('/api/v1/RelacaoPSP/' + params.idpessoasingular)
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}


	useEffect(() => {
		obterDados();
		obterEmpresario();
		obterEvento();
		obterJornalista();
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
									<Nav.Link href="/AdminHome">Home</Nav.Link>
									<Nav.Link href="/AdminConsultarPoliticos">Políticos</Nav.Link>
									<Nav.Link href="/AdminConsultarEventos">Eventos</Nav.Link>
									<Nav.Link href="/AdminConsultarEmpresarios">Empresários</Nav.Link>
									<Nav.Link href="/AdminConsultarEmpresas">Empresas</Nav.Link>
									<Nav.Link href="/AdminConsultarUtilizadores">Gestão Utilizadores</Nav.Link>
									<Nav.Link href="/AdminAPessoal">Área Pessoal</Nav.Link>
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
										<p>Empresário:{item.nome}</p>
									))}
									{data3.map(item => (
										<p>Evento: {item.designacao}</p>
									))}
									<p>Motivo: {item.motivo}</p>
									<p>Valores: {item.valores}€</p>
									<p>Data inserção: {item.data}</p>
									{data3.map(item => (
										<p>Inserido por: {item.username}</p>
									))}
									<p><b>Credibilidade: {item.credibilidade}</b></p>
								</Card.Text>
							</Card.Body>
						</Card>
					))}
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

export default AdminRelacoesEmpresarios;
