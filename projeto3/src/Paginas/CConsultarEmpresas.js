import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function CConsultarEmpresas() {

	const params = useParams();
	const [data1, setData1] = useState([]);

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function obterListaEmpresas() {
		return api.get('/api/v1/PessoaColetiva')
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}


	useEffect(() => {
		obterListaEmpresas();
	}, []);


	return (
		<div>
			<Container fluid>

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
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<br /><br />
				<h1>Empresas</h1>

				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Designação</th>
							<th>País</th>
							<th>Fundação</th>
							<th>Ramo de Atividade</th>
						</tr>
					</thead>
					<tbody>
						{data1.map(item => (
							<tr>
								<td>{item.designacao}</td>
								<td>{item.pais}</td>
								<td>{item.anofundacao}</td>
								<td>{item.ramoatividade}</td>
								<td><Button variant="dark" href={"http://localhost:3000/CRelacoesEmpresas/" + item.idpessoasingular}>Ver relações</Button></td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</div>
	);
}

export default CConsultarEmpresas;
