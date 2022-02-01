import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function JornalistaCriarEvento() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Designacao, setDesignacao] = useState([]);
	const [Descrição, setDescricao] = useState([]);
	const [Data, setData] = useState([]);

	useEffect(() => {
		api.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem("token")
	}, []);

	function adicionaEvento() {
		return api.post('/api/v1/Evento', {
			designacao: Designacao,
			descricao: Descrição,
			data: Data
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
				<h2>Criar Evento</h2>
				<br></br>
				<Form.Label>Designação: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="designacao"
					placeholder="Introduza a designação" onChange={e => setDesignacao(e.target.value)} />
				<br></br>
				<Form.Label>Descrição: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="descrição"
					placeholder="Introduza a descrição" onChange={e => setDescricao(e.target.value)} />
				<br></br>
				<Form.Label>Data: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="data"
					placeholder="Introduza a data" onChange={e => setData(e.target.value)} />
				<br></br>
				<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaEvento}>Criar Evento</button>
			</Container>
		</div>
	);
}

export default JornalistaCriarEvento;