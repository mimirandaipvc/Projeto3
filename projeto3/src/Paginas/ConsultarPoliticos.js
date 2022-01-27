import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function ConsultarPoliticos() {

	const params = useParams();
	const [data1, setData1] = useState([]);


	function obterListaPoliticos() {
		return api.get('/api/v1/Politico')
			.then(function (response) {
				setData1(response.data);
				console.log(response.data);
			});
	}


	useEffect(() => {
		obterListaPoliticos();
	})


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
					<h1>POLÍTICOS</h1>

					<Table striped bordered hover>
						<thead>
								<tr>
									<th>Nome</th>
									<th>Sexo</th>
									<th>Nacionalidade</th>
									<th>Data de Nascimento</th>
									<th>Profissão</th>
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
									<td><Button variant="dark" href={"http://localhost:3000/RelacoesPoliticos/" + item.idpessoasingular}>Ver relações</Button></td>
								</tr>
							))}
						</tbody>
					</Table>
				</Container>
			</div>
		);
}

export default ConsultarPoliticos;
