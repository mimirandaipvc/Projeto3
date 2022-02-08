import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function CConsultarPoliticos() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const navigate = useNavigate();


	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);


	function obterListaPoliticos() {
		return api.get('/api/v1/Politico')
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}


	useEffect(() => {
		obterListaPoliticos();
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
						<Col xs={12}><h1>POLÍTICOS</h1></Col>
					</Row>

					<Row>
						<Col xs={12}>
							<Table striped bordered hover responsive="lg">
								<thead>
									<tr>
										<th>Nome</th>
										<th>Sexo</th>
										<th>Nacionalidade</th>
										<th>Data de Nascimento</th>
										<th>Profissão</th>
										<th>Partido Político</th>
										<th>Cargos em Empresas</th>
										<th>Relações</th>
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
											<td>{item.partido}</td>
											<td><Button variant="dark" href={"http://localhost:3000/CCargosEmEmpresas/" + item.idpessoasingular}>Ver Cargos</Button></td>
											<td><Button variant="dark" href={"http://localhost:3000/CRelacoesPoliticos/" + item.idpessoasingular}>Ver relações</Button></td>
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

export default CConsultarPoliticos;
