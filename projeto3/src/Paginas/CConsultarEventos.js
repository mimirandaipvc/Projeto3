import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function CConsultarEventos() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const navigate = useNavigate();


	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);


	function obterListaEventos() {
		return api.get('/api/v1/Evento')
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}


	useEffect(() => {
		obterListaEventos();
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
									<Nav.Link href="/CHome">Home</Nav.Link>
									<Nav.Link href="/CConsultarPoliticos">Políticos</Nav.Link>
									<Nav.Link href="/CConsultarEventos">Eventos</Nav.Link>
									<Nav.Link href="/CConsultarEmpresarios">Empresários</Nav.Link>
									<Nav.Link href="/CConsultarEmpresas">Empresas</Nav.Link>
								</Nav>
								<Navbar.Text className="justify-content-end">
									<Button style={{ float: 'right', color: 'black' }} variant="light" href="http://localhost:3000/Login/">Efetuar Login</Button>
								</Navbar.Text>
							</Navbar.Collapse>
						</Container>
					</Navbar>

					<br /><br />
					<Row>
						<Col xs={12}><h1>EVENTOS</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							<Table striped bordered hover responsive="lg">
								<thead>
									<tr>
										<th>Designacao</th>
										<th>Descrição</th>
										<th>Data</th>
										<th>Relações</th>
									</tr>
								</thead>
								<tbody>
									{data1.map(item => (
										<tr>
											<td>{item.designacao}</td>
											<td>{item.descricao}</td>
											<td>{item.data}</td>
											<td><Button variant="dark" href={"http://localhost:3000/CRelacoesEventos/" + item.idevento}>Ver relações</Button></td>
										</tr>
									))}
								</tbody>
							</Table>
						</Col>
					</Row>


					<footer id="footer">
						<div class="container text-center">
							<small>© 2022 Copyright: Miguel Miranda e Pedro Castro | Engenharia Informática | ESTG-IPVC </small>
						</div>
					</footer>
				</div>
			</Container >
		</div >
	);
}

export default CConsultarEventos;
