import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function CriarEvento() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Nome, setNome] = useState([]);
	const [Descricao, setDescricao] = useState([]);
	const [Data, setData] = useState([]);



	function adicionaEvento() {
		return api.post('/api/v1/Evento', {
			nome: Nome,
			descricao: Descricao,
			data: Data,
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
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#areapessoal">Área Pessoal</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<br />
				<h2>Criar Evento</h2>
				<br></br>
				<Form.Label>Nome: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="nome"
					placeholder="Introduza o Nome:" onChange={e => setNome(e.target.value)} />
				<br></br><Form.Label>Data: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="data"
					placeholder="Introduza a Data do Evento:" onChange={e => setData(e.target.value)} />
				<br></br>
				<Form.Label>Descrição: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '10px 2px' }} name="descricao"
					placeholder="Introduza a Descrição:" onChange={e => setDescricao(e.target.value)} />
				<br></br>
				<br></br>
				<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaEvento}>Criar Evento</button>
			</Container>
		</div>
	);
}

export default CriarEvento;