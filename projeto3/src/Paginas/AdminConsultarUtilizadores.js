import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function AdminConsultarUtilizadores() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);


	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function obterListaAdmin() {
		return api.get('/api/v1/Admin')
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}

	function obterListaJornalista() {
		return api.get('/api/v1/Jornalista')
			.then(function (response) {
				setData2(response.data);
				console.log(response.data);
			});
	}

	function obterListaCidadaoRegistado() {
		return api.get('/api/v1/CidadaoRegistado')
			.then(function (response) {
				setData3(response.data);
				console.log(response.data);
			});
	}


	useEffect(() => {
		obterListaAdmin();
		obterListaJornalista();
		obterListaCidadaoRegistado();
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
				<h1>Administradores</h1>

				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>Username</th>
							<th>Data de Registo</th>
						</tr>
					</thead>
					<tbody>
						{data1.map(item => (
							<tr>
								<td>{item.idutilizador}</td>
								<td>{item.username}</td>
								<td>{item.dataregisto}</td>
								<td><Button variant="dark" href={"http://localhost:3000/AdminEditarAdmin/" + item.idutilizador}>Editar</Button></td>
							</tr>
						))}
					</tbody>
				</Table>

				<br /><br />
				<h1>Jornalistas</h1>

				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>Username</th>
							<th>Data de Registo</th>
						</tr>
					</thead>
					<tbody>
						{data2.map(item => (
							<tr>
								<td>{item.idutilizador}</td>
								<td>{item.username}</td>
								<td>{item.dataregisto}</td>
								<td><Button variant="dark" href={"http://localhost:3000/AdminEditarJornalista/" + item.idutilizador}>Editar</Button></td>
							</tr>
						))}
					</tbody>
				</Table>

				<br /><br />
				<h1>Cidadãos Registados</h1>

				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>Username</th>
							<th>Data de Registo</th>
						</tr>
					</thead>
					<tbody>
						{data3.map(item => (
							<tr>
								<td>{item.idutilizador}</td>
								<td>{item.username}</td>
								<td>{item.dataregisto}</td>
								<td><Button variant="dark" href={"http://localhost:3000/AdminEditarCidadaoRegistado/" + item.idutilizador}>Editar</Button></td>
							</tr>
						))}
					</tbody>
				</Table>
				<br></br>
				<Button variant="dark" href={"http://localhost:3000/AdminCriarAdmin/"}>Criar Administrador</Button>
				<br></br>
				<Button variant="dark" href={"http://localhost:3000/AdminCriarJornalista/"}>Criar Jornalista</Button>
			</Container>
		</div>
	);
}

export default AdminConsultarUtilizadores;
