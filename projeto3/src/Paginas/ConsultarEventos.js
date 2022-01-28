import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function ConsultarEventos() {

	const params = useParams();
	const [data1, setData1] = useState([]);


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
				<h1>EVENTO</h1>

				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Designacao</th>
							<th>Descrição</th>
							<th>Data</th>
						</tr>
					</thead>
					<tbody>
						{data1.map(item => (
							<tr>
								<td>{item.designacao}</td>
								<td>{item.descricao}</td>
								<td>{item.data}</td>
								<td><Button variant="dark" href={"http://localhost:3000/RelacoesEventos/" + item.idevento}>Ver relações</Button></td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</div>
	);
}

export default ConsultarEventos;
