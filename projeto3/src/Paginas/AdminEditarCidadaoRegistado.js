import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function AdminEditarCidadaoRegistado() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Username, setUsername] = useState([]);
	const [Password, setPassword] = useState([]);

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function editaCidadaoRegistado() {
		return api.put('/api/v1/CidadaoRegistado/' + params.idutilizador, {
			username: Username,
			password: Password,
		}).then(response => {
			console.log(response.data);
		}).catch(error => {
			console.log(error);
		})
	}

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
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<br />
				<h2>Editar Cidadão Registado</h2>
				<br></br>
				<Form.Label>Username: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="username"
					placeholder="Introduza o username" onChange={e => setUsername(e.target.value)} />
				<br></br>
				<Form.Label>Password: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="password"
					placeholder="Introduza a password" onChange={e => setPassword(e.target.value)} />
				<br></br>

				<button type="button" className="btn btn-info btn-block mt-4" onClick={editaCidadaoRegistado}>Editar Cidadão Registado</button>
			</Container>
		</div>
	);
}

export default AdminEditarCidadaoRegistado;
