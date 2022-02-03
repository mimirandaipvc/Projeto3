import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'


import './AdminHome.css'

function AdminCargosEmEmpresas() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);


	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function obterJornalista() {
		for (const i = 0; i < data1.length; i++) {
			return api.get('/api/v1/Jornalista/' + data1[i].idutilizador)
				.then(function (response) {
					setData3(response.data);
					console.log(response.data);
				});
		}
	}

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
		obterJornalista();
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
								<p>Salario Mensal: {item.salario} €</p>
								{data3.map(item => (
									<p>Inserido por: {item.username}</p>
								))}
							</Card.Text>
						</Card.Body>
					</Card>
				))}
				<br></br>
			</Container>
		</div>
	);

}

export default AdminCargosEmEmpresas;
