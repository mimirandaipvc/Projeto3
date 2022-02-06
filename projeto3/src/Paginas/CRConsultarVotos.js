import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function CRConsultarVotos() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);


	const idutilizador = localStorage.getItem("idutilizador")

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

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
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<br /><br />
					<h1>VOTOS - Relações Pessoas Singulares</h1>

					<Table striped bordered hover>
						<thead>
							<tr>
								<th>ID Voto</th>
								<th>Data</th>
								<th>ID Relação PS</th>
								<th>tipoVoto</th>
							</tr>
						</thead>
						<tbody>
							{data1.map(item => (
								<tr>
									<td>{item.idvotorps}</td>
									<td>{item.data}</td>
									<td>{item.idrelacaops}</td>
									<td>{item.tipoVoto}</td>
								</tr>
							))}
						</tbody>
					</Table>

					<br /><br />
					<h1>VOTOS - Empresas</h1>

					<Table striped bordered hover>
						<thead>
							<tr>
								<th>ID Voto</th>
								<th>Data</th>
								<th>ID Relação PS</th>
								<th>tipoVoto</th>
							</tr>
						</thead>
						<tbody>
							{data2.map(item => (
								<tr>
									<td>{item.idvotorpc}</td>
									<td>{item.data}</td>
									<td>{item.idrelacaops}</td>
									<td>{item.tipoVoto}</td>
								</tr>
							))}
						</tbody>
					</Table>
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
