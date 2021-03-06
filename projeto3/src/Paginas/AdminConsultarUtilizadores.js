import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function AdminConsultarUtilizadores() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);
	const navigate = useNavigate();



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
								<Navbar.Text className="justify-content-end">
									<button id="" type="button" className="btn btn-danger" onClick={logout}>Logout</button>
								</Navbar.Text>
							</Navbar.Collapse>
						</Container>
					</Navbar>



					<br /><br />
					<Row>
						<Col xs={12}><h1>Administradores</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							<Table striped bordered hover responsive="lg">
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
											<td>{new Date(item.dataregisto).toLocaleDateString()}</td>
											<td><Button variant="dark" href={"http://localhost:3000/AdminEditarAdmin/" + item.idutilizador}>Editar</Button></td>
										</tr>
									))}
								</tbody>
							</Table>
						</Col>
					</Row>


					<br /><br />
					<Row>
						<Col xs={12}><h1>Jornalistas</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							<Table striped bordered hover responsive="lg">
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
											<td>{new Date(item.dataregisto).toLocaleDateString()}</td>
											<td><Button variant="dark" href={"http://localhost:3000/AdminEditarJornalista/" + item.idutilizador}>Editar</Button></td>
										</tr>
									))}
								</tbody>
							</Table>
						</Col>
					</Row>


					<br /><br />
					<Row>
						<Col xs={12}><h1>Cidadãos Registados</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							<Table striped bordered hover responsive="lg">
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
											<td>{new Date(item.dataregisto).toLocaleDateString()}</td>
											<td><Button variant="dark" href={"http://localhost:3000/AdminEditarCidadaoRegistado/" + item.idutilizador}>Editar</Button></td>
										</tr>
									))}
								</tbody>
							</Table>
						</Col>
					</Row>

					<br></br>
					<Row>
						<Col xs={6}><Button variant="dark" href={"http://localhost:3000/AdminCriarAdmin/"}>Criar Administrador</Button></Col>
						<Col xs={6}><Button variant="dark" href={"http://localhost:3000/AdminCriarJornalista/"}>Criar Jornalista</Button></Col>
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

export default AdminConsultarUtilizadores;
