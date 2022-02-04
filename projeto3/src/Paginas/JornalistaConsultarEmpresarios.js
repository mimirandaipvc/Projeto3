import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function JornalistaConsultarEmpresarios() {

	const params = useParams();
	const [data1, setData1] = useState([]);

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function obterListaEmpresarios() {
		return api.get('/api/v1/Empresario')
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}


	useEffect(() => {
		obterListaEmpresarios();
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
				<h1>EMPRESÁRIOS</h1>

				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Sexo</th>
							<th>Nacionalidade</th>
							<th>Data de Nascimento</th>
							<th>Profissão</th>
							<th>Cargos em Empresas</th>
						</tr>
					</thead>
					<tbody>
						{data1.map(item => (
							<tr>
								<td>{item.nome}</td>
								<td>{item.sexo}</td>
								<td>{item.nacionalidade}</td>
								<td>{item.datanascimento}</td>
								<td>{item.profissao}</td>
								<td><Button variant="dark" href={"http://localhost:3000/JornalistaCargosEmEmpresas/" + item.idpessoasingular}>Ver Cargos</Button></td>
								<td><Button variant="dark" href={"http://localhost:3000/JornalistaRelacoesEmpresarios/" + item.idpessoasingular}>Ver relações</Button></td>
							</tr>
						))}
					</tbody>
				</Table>
				<Button variant="dark" href={"http://localhost:3000/JornalistaCriarEmpresario/"}>Criar Empresário</Button>
			</Container>
		</div>
	);
}

export default JornalistaConsultarEmpresarios;
