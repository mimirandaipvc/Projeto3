import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function JornalistaConsultarEmpresas() {

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
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<br /><br />
					<h1>Empresas</h1>

					<Table striped bordered hover responsive="lg">
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
									<td><Button variant="dark" href={"http://localhost:3000/JornalistaRelacoesEmpresas/" + item.idpessoacoletiva}>Ver relações</Button></td>
								</tr>
							))}
						</tbody>
					</Table>
					<Button variant="dark" href={"http://localhost:3000/JornalistaCriarEmpresa/"}>Criar Empresa</Button>
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

export default JornalistaConsultarEmpresas;
