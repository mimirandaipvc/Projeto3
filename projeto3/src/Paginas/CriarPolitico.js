import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import api from './api'
import { Form, Button, Table, Carousel, Card, CardGroup, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RelacoesPoliticos.css'



function CriarPolitico() {

	const params = useParams();
	const [data1, setData1] = useState([]);
	const [Nome, setNome] = useState([]);
	const [Nacionalidade, setNacionalidade] = useState([]);
	const [Profissao, setProfissao] = useState([]);
	const [DtNascimento, setNascimento] = useState([]);



	function adicionaPolitico() {
		return api.post('/api/v1/Politico', {
			nome: Nome,
			nacionalidade: Nacionalidade,
			profissao: Profissao,
			datanascimento: DtNascimento
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
				<h2>Criar Politico</h2>
				<br></br>
				<Form.Label>Nome: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="Nome"
					placeholder="Introduza o Nome:" onChange={e => setNome(e.target.value)} />
				<br></br>
				<Form.Label>Nacionalidade: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="nacionalidade"
					placeholder="Introduza a Nacionalidade:" onChange={e => setNacionalidade(e.target.value)} />
				<br></br>
				<Form.Label>Profissao: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="profissao"
					placeholder="Introduza a Profissão:" onChange={e => setProfissao(e.target.value)} />
				<br></br>
				<Form.Label>Data: </Form.Label>
				<Form.Control style={{ fontSize: 17, padding: '2px 5px' }} name="dtnascimento"
					placeholder="Introduza a Data de Nascimento:" onChange={e => setNascimento(e.target.value)} />
				<br></br>
				<br></br>
				<br></br>
				<button type="button" className="btn btn-info btn-block mt-4" onClick={adicionaPolitico}>Criar Politico</button>
			</Container>
		</div>
	);
}

export default CriarPolitico;