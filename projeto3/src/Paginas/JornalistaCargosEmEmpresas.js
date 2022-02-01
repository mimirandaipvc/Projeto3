import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'


import './AdminHome.css'

function JornalistaCargosEmEmpresas() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function obterEmpresa() {
		for (const i = 0; i < data1.length; i++) {
			return api.get('/api/v1/PessoaColetiva/' + data1[i].idpessoacoletiva)
				.then(function (response) {
					setData2(response.data);
					console.log(response.data);
				});
		}
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
		obterEmpresa();
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
								<Nav.Link href="/JornalistaHome">Home</Nav.Link>
								<Nav.Link href="/JornalistaConsultarPoliticos">Políticos</Nav.Link>
								<Nav.Link href="/JornalistaConsultarEventos">Eventos</Nav.Link>
								<Nav.Link href="/JornalistaConsultarEmpresarios">Empresários</Nav.Link>
								<Nav.Link href="/JornalistaConsultarEmpresas">Empresas</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<br />
				<h1>CARGOS EM EMPRESAS</h1>

				{data1.map(item => (
					<Card style={{ width: '23rem' }} key={item.idrelacaops}>
						<Card.Body>
							<Card.Title>Relação número <b>{item.idrelacoespessoassc}</b> </Card.Title>
							<Card.Text>
								{data2.map(item => (
									<p>Empresa:{item.designacao}</p>
								))}
								<p>Data Inicio: {item.datainicio}</p>
								<p>Cargo: {item.cargo}</p>
								<p>Salario: {item.salario} €</p>
								<p>Inserido por: {item.idutilizador}</p>
							</Card.Text>
						</Card.Body>
					</Card>
				))}
				<br></br>

				<Button variant="dark" href={"http://localhost:3000/JornalistaCriarRelacaoPSC/" + params.idpessoasingular}>Criar Novo Cargo</Button>

			</Container>
		</div>
	);

}

export default JornalistaCargosEmEmpresas;