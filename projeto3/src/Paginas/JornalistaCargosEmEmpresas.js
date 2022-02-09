import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'




function JornalistaCargosEmEmpresas() {

	const params = useParams();
	const [data1, setData1] = useState([]);
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


	function obterDados() {
		return api.get('/api/v1/RelacaoPessoasSCPS/' + params.idpessoasingular)
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}

	useEffect(() => {
		obterDados();
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
								<Navbar.Text className="justify-content-end">
									<button id="" type="button" className="btn btn-danger" onClick={logout}>Logout</button>
								</Navbar.Text>
							</Navbar.Collapse>
						</Container>
					</Navbar>


					<br /><br />
					<Row>
						<Col xs={12}><h1>CARGOS EM EMPRESAS</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							{data1.map(item => (
								<Card style={{ width: '23rem' }} key={item.idrelacaops}>
									<Card.Body>
										<Card.Title>Relação número <b>{item.idrelacoespessoassc}</b> </Card.Title>
										<hr></hr>
										<Card.Text>
											<p><b>Empresa</b>:{item.designacao}</p>
											<p><b>Data Inicio</b>: {item.datainicio}</p>
											<p><b>Cargo</b>: {item.cargo}</p>
											<p><b>Salário Mensal</b>: {item.salario} €</p>
											<p><b>Inserido por</b>: {item.username}</p>
										</Card.Text>
									</Card.Body>
								</Card>
							))}
						</Col>
					</Row>

					<br></br>
					<Row>
						<Col xs={12}><Button variant="dark" href={"http://localhost:3000/JornalistaCriarRelacaoPSC/" + params.idpessoasingular}>Criar Novo Cargo</Button></Col>
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

export default JornalistaCargosEmEmpresas;
