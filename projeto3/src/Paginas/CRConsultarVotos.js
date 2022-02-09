import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function CRConsultarVotos() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const navigate = useNavigate();



	const idutilizador = localStorage.getItem("idutilizador")

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function logout() {
		localStorage.removeItem("iud");
		localStorage.removeItem("token");
		localStorage.removeItem("idtipoutilizador");
		alert("Até breve!")
		navigate("/Login");
	}

	function obterListaVotosRPS() {
		return api.get('/api/v1/VotoRPS/' + idutilizador)
			.then(function (response) {
				setData1(response.data);
			});
	}

	function obterListaVotosRPC() {
		return api.get('/api/v1/VotoRPC/' + idutilizador)
			.then(function (response) {
				setData2(response.data);
			});
	}


	useEffect(() => {
		obterListaVotosRPS();
		obterListaVotosRPC();
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
									<Nav.Link href="/CRHome">Home</Nav.Link>
									<Nav.Link href="/CRConsultarPoliticos">Políticos</Nav.Link>
									<Nav.Link href="/CRConsultarEventos">Eventos</Nav.Link>
									<Nav.Link href="/CRConsultarEmpresarios">Empresários</Nav.Link>
									<Nav.Link href="/CRConsultarEmpresas">Empresas</Nav.Link>
									<Nav.Link href="/CRConsultarVotos">Histórico de Votos</Nav.Link>
									<Nav.Link href="/CRAPessoal">Área Pessoal</Nav.Link>
								</Nav>
								<Navbar.Text className="justify-content-end">
									<button id="" type="button" className="btn btn-danger" onClick={logout}>Logout</button>
								</Navbar.Text>
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<br /><br />
					<Row>
						<Col xs={12}><h1>Votos em Relações de Políticos/Empresários</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							<Table striped bordered hover responsive="lg">
								<thead>
									<tr>
										<th>ID Voto</th>
										<th>Data</th>
										<th>ID Relação</th>
										<th>tipoVoto</th>
									</tr>
								</thead>
								<tbody>
									{data1.map(item => (
										<tr>
											<td>{item.idvotorps}</td>
											<td>{new Date(item.data).toLocaleDateString()}</td>
											<td>{item.idrelacaops}</td>
											<td>{item.tipoVoto}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Col>
					</Row>

					<br /><br />

					<Row>
						<Col xs={12}><h1>Votos em Relações de Empresas</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							<Table striped bordered hover responsive="lg">
								<thead>
									<tr>
										<th>ID Voto</th>
										<th>Data</th>
										<th>ID Relação</th>
										<th>Voto</th>
									</tr>
								</thead>
								<tbody>
									{data2.map(item => (
										<tr>
											<td>{item.idvotorpc}</td>
											<td>{new Date(item.data).toLocaleDateString()}</td>
											<td>{item.idrelacaopc}</td>
											<td>{item.tipoVoto}</td>
										</tr>
									))}
								</tbody>
							</Table>
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

export default CRConsultarVotos;
