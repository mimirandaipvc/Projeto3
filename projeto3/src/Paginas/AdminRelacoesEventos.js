import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'


import './AdminHome.css'

function AdminRelacoesEventos() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState([]);
	const [data4, setData4] = useState([]);
	const [data5, setData5] = useState([]);



	function obterPolitico() {
		for (const i = 0; i < data5.length; i++) {
			return api.get('/api/v1/Politico/' + data5[i].idpessoasingular)
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
					setData4(response.data);
					console.log(response.data);
				});
		}
	}

	function obterEvento() {
		for (const i = 0; i < data1.length; i++) {
			return api.get('/api/v1/Evento/' + params.idevento)
				.then(function (response) {
					setData2(response.data);
					console.log(response.data);
				});
		}
	}

	function obterDadosPCE() {
		return api.get('/api/v1/RelacaoPCE/' + params.idevento)
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}

	function obterDadosPSE() {
		return api.get('/api/v1/RelacaoPSE/' + params.idevento)
			.then(function (response) {
				setData5(response.data);
				console.log(response.data);
			});
	}


	useEffect(() => {
		obterDadosPCE();
		obterDadosPSE();
		obterPolitico();
		obterEmpresa();
		obterEvento();
	}, [data1]);


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
				<div>
					<h1>RELAÇÕES COLETIVAS</h1>

					{data1.map(item => (
						<Card style={{ width: '23rem' }} key={item.idrelacaops}>
							<Card.Body>
								<Card.Title>Relação número <b>{item.idrelacaopc}</b> </Card.Title>
								<Card.Text>
									{data4.map(item => (
										<p>Empresa:{item.designacao}</p>
									))}
									{data2.map(item => (
										<p>Evento: {item.designacao}</p>
									))}
									<p>Motivo: {item.motivo}</p>
									<p>Valores: {item.valores}€</p>
									<p>Data inserção: {item.data}</p>
									<p>Inserido por: {item.idutilizador}</p>
									<p><b>Credibilidade: {item.credibilidade}</b></p>
								</Card.Text>
							</Card.Body>
						</Card>
					))}
				</div>

				<br></br>

				<div>
					<h1>RELAÇÕES SINGULARES</h1>

					{data5.map(item => (
						<Card style={{ width: '23rem' }} key={item.idrelacaops}>
							<Card.Body>
								<Card.Title>Relação número <b>{item.idrelacaops}</b> </Card.Title>
								<Card.Text>
									{data3.map(item => (
										<p>Político:{item.nome}</p>
									))}
									{data2.map(item => (
										<p>Evento: {item.designacao}</p>
									))}
									<p>Motivo: {item.motivo}</p>
									<p>Valores: {item.valores}€</p>
									<p>Data inserção: {item.data}</p>
									<p>Inserido por: {item.idutilizador}</p>
									<p><b>Credibilidade: {item.credibilidade}</b></p>
								</Card.Text>
							</Card.Body>
						</Card>
					))}
				</div>
			</Container>
		</div>
	);

}

export default AdminRelacoesEventos;

