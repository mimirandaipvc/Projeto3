import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function ConsultarUtilizadores() {

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

				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="#home">Rede Contactos Politicos</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#areapessoal">Área Pessoal</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<br />
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
								<td><Button variant="dark" href={"http://localhost:3000/EditarAdmin/" + item.idutilizador}>Editar</Button></td>
								<td><Button variant="dark" href={"http://localhost:3000/" + item.utilizador}>Eliminar</Button></td>
							</tr>
						))}
					</tbody>
				</Table>

				<br />
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
								<td><Button variant="dark" href={"http://localhost:3000/EditarJornalista/" + item.idutilizador}>Editar</Button></td>
								<td><Button variant="dark" href={"http://localhost:3000/" + item.utilizador}>Eliminar</Button></td>
							</tr>
						))}
					</tbody>
				</Table>

				<br />
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
								<td><Button variant="dark" href={"http://localhost:3000/EditarCidadaoRegistado/" + item.idutilizador}>Editar</Button></td>
								<td><Button variant="dark" href={"http://localhost:3000/" + item.utilizador}>Eliminar</Button></td>
							</tr>
						))}
					</tbody>
				</Table>
				<br></br>
				<Button variant="dark" href={"http://localhost:3000/CriarAdmin/"}>Criar Administrador</Button>
				<br></br>
				<Button variant="dark" href={"http://localhost:3000/CriarJornalista/"}>Criar Jornalista</Button>
			</Container>
		</div>
	);
}

export default ConsultarUtilizadores;
