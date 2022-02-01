import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function JornalistaCriarInfoPS() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Motivo, setMotivo] = useState([]);
	const [Valores, setValores] = useState([]);
	const [Data, setData] = useState([]);
	const [IDEvento, setIDEvento] = useState([]);

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function adicionaRelacaoPS() {
		return api.post('/api/v1/RelacaoPS', {
			motivo: Motivo,
			valores: Valores,
			data: Data,
			idpessoasingular: params.idpessoasingular,
			idevento: IDEvento,
			idutilizador: 1
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
				<h2>Adicionar Relação</h2>
				<br></br>
				<Form.Label>Data: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="data"
					placeholder="Introduza a data" onChange={e => setData(e.target.value)} />
				<br></br>
				<Form.Label>Motivo: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="motivo"
					placeholder="Introduza o motivo" onChange={e => setMotivo(e.target.value)} />
				<br></br>
				<Form.Label>Valores: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="valores"
					placeholder="Introduza os valores" onChange={e => setValores(e.target.value)} />
				<br></br>
				<Form.Label>ID Evento: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="idevento"
					placeholder="Intoduza o ID do Evento" onChange={e => setIDEvento(e.target.value)} />
				<br></br>
				<br></br>
				<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaRelacaoPS}>Adicionar Relacao</button>
			</Container>
		</div>
	);
}

export default JornalistaCriarInfoPS;
